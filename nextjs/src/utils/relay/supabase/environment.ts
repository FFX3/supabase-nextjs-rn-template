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
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'

export async function networkFetch(
  request: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {

  // client sessions don't work at the momment
  //const {
  //  data: { session },
  //} = await supabase.auth.getSession()

  // when the client sessions work do this
  // https://supabase.com/docs/guides/graphql/with-relay
  

  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (apiUrl == null || apiUrl === "") {
    throw new Error(
      "Set the graphql api url"
    );
  }

  const response = await fetch(`${apiUrl}/graphql/v1`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // I just doing this till I get the client key working
      Authorization: `bearer ${SERVICE_ROLE_KEY}`,
      apiKey: SERVICE_ROLE_KEY
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
