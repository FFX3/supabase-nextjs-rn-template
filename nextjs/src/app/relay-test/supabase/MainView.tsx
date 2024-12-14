import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { MainViewQuery } from "./__generated__/MainViewQuery.graphql";
import Contacts from "./contacts";

export default function MainView(props: {
  queryRef: PreloadedQuery<MainViewQuery>;
}) {
  const data = usePreloadedQuery(
    graphql`
      query ContactsMainViewQuery {
        profilesCollection(first: 1){
          edges {
            node {
              email
            }
          }
        }
        ...ContactsFragment
      }
    `,
    props.queryRef
  );

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>
        {data.repository?.owner.login}/{data.repository?.name}
      </h1>
      <Contacts profilesCollection={data.profilesCollection} />
    </Suspense>
  );
}
