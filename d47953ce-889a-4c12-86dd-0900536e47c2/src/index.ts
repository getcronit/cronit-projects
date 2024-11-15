import { app } from '@getcronit/pylon';
import userService from './userService';

export const graphql = {
  Query: {
    hello: () => {
      console.log('Query: hello called');
      return 'Hello, world!';
    },
    users: () => {
      console.log('Query: users called');
      return userService.listUsers();
    }
  },
  Mutation: {
    createUser: (name: string, email: string) => {
      console.log('Mutation: createUser called with', { name, email });
      return userService.$createUser(name, email);
    },
    updateUser: (id: number, name: string, email: string) => {
      console.log('Mutation: updateUser called with', { id, name, email });
      return userService.$updateUser(id, name, email);
    },
    deleteUser: (id: number) => {
      console.log('Mutation: deleteUser called with', { id });
      return userService.$deleteUser(id);
    }
  }
};

export default app;