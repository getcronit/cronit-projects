import { app } from '@getcronit/pylon';
import userService from './userService';
import carService from './carService';
import { PlaneService } from './planeService';

const planeService = new PlaneService();

export const graphql = {
  Query: {
    hello: () => {
      console.log('Hello query was called');
      return 'Hello, world!';
    },
    users: async () => {
      console.log('Users query was called');
      return await userService.listUsers();
    },
    cars: () => {
      console.log('Cars query was called');
      return carService.listCars();
    },
    planes: () => {
      console.log('Planes query was called');
      return planeService.listPlanes();
    },
    planeById: (id: string) => {
      console.log(`PlaneById query was called with id: ${id}`);
      return planeService.findPlaneById(id);
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
    },
    createCar: (make: string, model: string, year: number) => {
      console.log(`CreateCar mutation was called with make: ${make}, model: ${model}, year: ${year}`);
      return carService.$createCar(make, model, year);
    },
    updateCar: (id: number, make: string, model: string, year: number) => {
      console.log(`UpdateCar mutation was called with id: ${id}, make: ${make}, model: ${model}, year: ${year}`);
      return carService.$updateCar(id, make, model, year);
    },
    deleteCar: (id: number) => {
      console.log(`DeleteCar mutation was called with id: ${id}`);
      return carService.$deleteCar(id);
    },
    createPlane: (id: string, model: string, manufacturer: string, capacity: number) => {
      console.log(`CreatePlane mutation was called with id: ${id}, model: ${model}, manufacturer: ${manufacturer}, capacity: ${capacity}`);
      planeService.addPlane({ id, model, manufacturer, capacity });
    },
    updatePlane: (id: string, updatedInfo: Partial<{ model: string; manufacturer: string; capacity: number }>) => {
      console.log(`UpdatePlane mutation was called with id: ${id}`);
      planeService.$updatePlane(id, updatedInfo);
    },
    deletePlane: (id: string) => {
      console.log(`DeletePlane mutation was called with id: ${id}`);
      planeService.$removePlane(id);
    }
  }
};

export default app;
