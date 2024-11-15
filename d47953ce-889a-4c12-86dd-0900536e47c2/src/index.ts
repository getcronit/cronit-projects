import { app } from '@getcronit/pylon';
import userService from './userService';

export const graphql = {
  Query: {
    hello: () => {
      console.log('Hello query was called');
      return 'Hello, world!';
    },
    users: async () => {
      console.log('Users query was called');
      return await userService.listUsers();
    }
  },
  Mutation: {
    createUser: async (name: string, email: string) => {
      console.log(`CreateUser mutation was called with name: ${name}, email: ${email}`);
      return await userService.$createUser(name, email);
    },
    updateUser: async (id: number, name: string, email: string) => {
      console.log(`UpdateUser mutation was called with id: ${id}, name: ${name}, email: ${email}`);
      return await userService.$updateUser(id, name, email);
    },
    deleteUser: async (id: number) => {
      console.log(`DeleteUser mutation was called with id: ${id}`);
      return await userService.$deleteUser(id);
    }
  }
};

export default app;