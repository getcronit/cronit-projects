import { app } from '@getcronit/pylon';

export const graphql = {
  Query: {
    hello: () => {
      console.log('Hello query was called');
      return 'Hello, world!';
    }
  },
  Mutation: {}
};

export default app;
