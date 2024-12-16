import { mainViewQuery, } from "./__generated__/mainViewQuery.graphql";
import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";

export default function MainView(props: {
  queryRef: PreloadedQuery<mainViewQuery>;
}) {
  const data = usePreloadedQuery(
    graphql`
    query mainViewQuery {
      usersCollection(first:1) {
        edges {
          node {
            email
          }
        }
      }
    }
    `,
    props.queryRef
  );

  console.log(data)

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>
        {data.usersCollection?.edges[0]?.node.email}
      </h1>
    </Suspense>
  );
}
