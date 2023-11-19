import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

console.log('Grpahql url to be used:', process.env.GRAPHQL_API_URL);

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_API_URL,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
    mutate: {
      fetchPolicy: 'network-only',
    },
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
});
