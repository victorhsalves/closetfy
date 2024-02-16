import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: 'http://142.93.127.240:3000/graphql'
});

// const authLink = setContext((_, { headers }) => {
//   const token: string = storage.getToken();

//   if (token) {
//     return {
//       headers: {
//         ...headers,
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   }

//   return {
//     headers,
//   };
// });

const api = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default api;
