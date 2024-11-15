import { app } from '@getcronit/pylon';
import { UserService } from './userService';
import { CarService } from './carService';

const userService = new UserService();
const carService = new CarService();

export const graphql = {
  Query: {
    hello: () => {
      console.log('Hello query was called');
      return 'Hello, world!';
    },
    listUsers: () => {
      return userService.listUsers();
    },
    listCars: () => {
      return carService.listCars();
    }
  },
  Mutation: {
    addUser: (name: string) => {
      return userService.addUser(name);
    },
    addCar: (car: string) => {
      return carService.$addCar(car);
    }
  }
};

export default app;