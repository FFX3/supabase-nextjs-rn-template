"use client";

import { useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "@/utils/relay/loadSerializableQuery";
import MainViewQueryNode, { mainViewQuery, } from "./__generated__/mainViewQuery.graphql";
import useSerializablePreloadedQuery from "@/utils/relay/useSerializablePreloadedQuery";
import MainView from "./main-view";

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    mainViewQuery
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


