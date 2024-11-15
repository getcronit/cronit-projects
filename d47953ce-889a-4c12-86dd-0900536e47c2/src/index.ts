import { app } from '@getcronit/pylon';
import userService from './userService';
import carService from './carService';
import { PlaneService } from './planeService';
import { AirportService } from './airportService';

const planeService = new PlaneService();
const airportService = new AirportService();

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
    },
    airports: () => {
      console.log('Airports query was called');
      return airportService.listAirports();
    },
    airportById: (id: number) => {
      console.log(`AirportById query was called with id: ${id}`);
      return airportService.findAirportById(id);
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
    },
    createAirport: (id: number, name: string, location: string) => {
      console.log(`CreateAirport mutation was called with id: ${id}, name: ${name}, location: ${location}`);
      airportService.addAirport(id, name, location);
    },
    deleteAirport: (id: number) => {
      console.log(`DeleteAirport mutation was called with id: ${id}`);
      return airportService.$removeAirport(id);
    }
  }
};

export default app;
