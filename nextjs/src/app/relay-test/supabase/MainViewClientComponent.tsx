"use client";

import MainView from "./ContactsMainView";
import { useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "@/utils/relay/supabase/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "./__generated__/MainViewQuery.graphql";
import useSerializablePreloadedQuery from "@/utils/relay/supabase/useSerializablePreloadedQuery";

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return <MainView queryRef={queryRef} />;
};

export default MainViewClientComponent;
