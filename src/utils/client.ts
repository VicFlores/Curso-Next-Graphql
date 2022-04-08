import { ApolloClient, InMemoryCache } from '@apollo/client';

const baseUrl = process.env.NEXT_PUBLIC_SERVICE_URL || 'http://localhost:4000';

export const client = new ApolloClient({
  uri: `${baseUrl}`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          avo: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Avocado',
                _id: args?._id,
              });
            },
          },
        },
      },
    },
  }),
});
