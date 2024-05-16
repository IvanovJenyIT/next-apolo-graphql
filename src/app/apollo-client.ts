import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL,
    cache: new InMemoryCache(),
  });
};

const apolloClient = createApolloClient();

export default apolloClient;
