import { app } from '@getcronit/pylon';
import { UserService } from './userService';
import { CarService } from './carService';
import { FlightService } from './flightService';

const userService = new UserService();
const carService = new CarService();
const flightService = new FlightService();

export const graphql = {
  Query: {
    hello: () => {
      console.log('Hello query was called');
      return 'Hello, world!';
    },
    listUsers: async () => {
      console.log('listUsers query was called');
      return await userService.listUsers();
    },
    listCars: async () => {
      console.log('listCars query was called');
      return await carService.listCars();
    },
    listFlights: async () => {
      console.log('listFlights query was called');
      return await flightService.listFlights();
    },
    findFlightById: async (id: number) => {
      console.log(`findFlightById query was called with id: ${id}`);
      return await flightService.findFlightById(id);
    }
  },
  Mutation: {
    addUser: async (name: string, email: string) => {
      console.log(`addUser mutation was called with name: ${name}, email: ${email}`);
      return await userService.addUser(name, email);
    },
    addCar: async (carDetails: string) => {
      console.log(`addCar mutation was called with carDetails: ${carDetails}`);
      return await carService.$addCar(carDetails);
    },
    addFlight: async (flightDetails: { id: number; airline: string; destination: string; departure: string; }) => {
      console.log(`addFlight mutation was called with flightDetails: ${JSON.stringify(flightDetails)}`);
      return await flightService.$addFlight(flightDetails);
    },
    removeFlight: async (id: number) => {
      console.log(`removeFlight mutation was called with id: ${id}`);
      return await flightService.$removeFlight(id);
    }
  }
};

export default app;
