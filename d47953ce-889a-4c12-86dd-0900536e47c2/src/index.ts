import { app } from '@getcronit/pylon';
import { UserService } from './userService';

const userService = new UserService();

export const graphql = {
  Query: {
    hello: () => {
      console.log('Hello query was called');
      return 'Hello, world!';
    },
    listUsers: () => {
      return userService.listUsers();
    }
  },
  Mutation: {
    addUser: (name: string) => {
      return userService.addUser(name);
    }
  }
};

export default app;