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
      return await userService.listUsers();
    },
    listCars: () => {
      return carService.listCars();
    },
    listFlights: () => {
      return flightService.listFlights();
    },
    findFlightById: (id: number) => {
      return flightService.findFlightById(id);
    }
  },
  Mutation: {
    addUser: async (name: string, email: string) => {
      return await userService.addUser(name, email);
    },
    addCar: (car: string) => {
      return carService.$addCar(car);
    },
    addFlight: (flight: { id: number; airline: string; destination: string; departure: string; }) => {
      return flightService.$addFlight(flight);
    },
    removeFlight: (id: number) => {
      return flightService.$removeFlight(id);
    }
  }
};

export default app;
