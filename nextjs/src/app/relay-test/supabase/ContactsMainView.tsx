import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { ContactsMainViewQuery } from "./__generated__/ContactsMainViewQuery.graphql";
import Contacts from "./Contacts";

export default function MainView(props: {
  queryRef: PreloadedQuery<ContactsMainViewQuery>;
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
        {data.profilesCollection?.edges[0].node.email}
      </h1>
      <Contacts />
    </Suspense>
  );
}
