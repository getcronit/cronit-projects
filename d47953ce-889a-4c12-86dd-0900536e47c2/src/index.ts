import { app } from '@getcronit/pylon';
import userService from './userService';

export const graphql = {
  Query: {
    hello: () => {
      return 'Hello, world!';
    },
    users: () => {
      return userService.listUsers();
    }
  },
  Mutation: {
    createUser: (name: string, email: string) => {
      return userService.$createUser(name, email);
    },
    updateUser: (id: number, name: string, email: string) => {
      return userService.$updateUser(id, name, email);
    },
    deleteUser: (id: number) => {
      return userService.$deleteUser(id);
    }
  }
};

export default app;