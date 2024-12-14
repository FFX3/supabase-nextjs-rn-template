import loadSerializableQuery from "@/utils/relay/supabase/loadSerializableQuery";
import MainViewQueryNode, {
  ContactsMainViewQuery,
} from "./__generated__/ContactsMainViewQuery.graphql";
import MainViewClientComponent from "./MainViewClientComponent";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    ContactsMainViewQuery
  >(MainViewQueryNode.params, {});

  return <MainViewClientComponent preloadedQuery={preloadedQuery} />;
};

export default Page;

export const revalidate = 0;
