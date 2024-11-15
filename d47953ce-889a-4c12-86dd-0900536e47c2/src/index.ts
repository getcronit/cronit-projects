import { app } from '@getcronit/pylon';
import userService from './userService';

export const graphql = {
  Query: {
    hello: () => {
      return 'Hello, world!';
    },
    users: async () => {
      return await userService.listUsers();
    }
  },
  Mutation: {
    createUser: async (name: string, email: string) => {
      return await userService.$createUser(name, email);
    },
    updateUser: async (id: number, name: string, email: string) => {
      return await userService.$updateUser(id, name, email);
    },
    deleteUser: async (id: number) => {
      return await userService.$deleteUser(id);
    }
  }
};

export default app;