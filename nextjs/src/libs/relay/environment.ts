import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  QueryResponseCache,
  Variables,
  GraphQLResponse,
  CacheConfig,
} from "relay-runtime";

const IS_SERVER = typeof window === typeof undefined;

const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

export async function networkFetch(
  request: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {

  if (API_URL == null || API_URL === "") {
    throw new Error(
      "Set the api url"
    );
  }

  if (ANON_KEY == null || ANON_KEY === "") {
    throw new Error(
      "Set the anon key"
    );
  }
  const supabase = IS_SERVER 
      ? await require("@/utils/supabase/server").createClient() 
      : require("@/utils/supabase/client").createClient()

  const { data: { session } } = await supabase.auth.getSession()
  const token = session?.access_token

  const response = await fetch(`${API_URL}/graphql/v1`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${token ?? ANON_KEY}`,
      apiKey: ANON_KEY
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });
  const json = await response.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    console.error(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        request.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  return json;
}

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

function createNetwork() {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
  ) {
    const isQuery = params.operationKind === "query";
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;
    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(params, variables);
  }

  const network = Network.create(fetchResponse);
  return network;
}

function createEnvironment() {
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
    getDataID: (node) => node.nodeId,
    missingFieldHandlers: [
      {
        handle(field, _record, argValues) {
          if(field.name === 'node' && 'nodeId' in argValues) {
            return argValues.nodeId
          }
          return undefined
        },
        kind: 'linked'
      }
    ],
  });
}

export const environment = createEnvironment();

export function getCurrentEnvironment() {
  if (IS_SERVER) {
    return createEnvironment();
  }

  return environment;
}
