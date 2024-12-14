import { useCallback } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { ContactsFragment$key } from "./__generated__/ContactsFragment.graphql";
import Link from "next/link";
import { ContactsPaginationQuery } from "./__generated__/ContactsPaginationQuery.graphql";

export default function Contacts(props: {
  contactsCollection: ContactsFragment$key | null
}) {
  const { data, loadNext, isLoadingNext, refetch } = usePaginationFragment<
    ContactsPaginationQuery,
    ContactsFragment$key
  >(
    graphql`
      fragment ContactsFragment on Query
        @refetchable(queryName: "ContactsPaginationQuery") {
        contactsCollection @connection(key: "Contacts_contacts"){
          edges {
            node {
              id
              email
              first_name
              last_name
            }
          }
        }
      }
    `, 
    props.contactsCollection
  );

  // Callback to paginate the issues list
  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) {
      return;
    }
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  return (
    <ul>
      {data?.contactsCollection?.edges?.map((edge) => {
        if (edge == null || edge.node == null) {
          return null;
        }
        return (
          <li key={edge.node.id}>
            {edge.node.first_name} {edge.node.last_name}
          </li>
        );
      })}
      <li>
        <button onClick={loadMore} disabled={isLoadingNext}>
          {isLoadingNext ? "Loading..." : "Load More"}
        </button>
        <button
          onClick={() =>
            refetch({
              //count: 20,
            })
          }
        >
          Refetch with 20 items
        </button>
      </li>
    </ul>
  );
}
