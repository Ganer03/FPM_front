import { STRAPI_TOKEN, STRAPI_URI } from "@/env";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: STRAPI_URI + "/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: STRAPI_TOKEN,
  },
});
