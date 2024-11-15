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
    listUsers: () => {
      return userService.listUsers();
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
    addUser: (name: string) => {
      return userService.addUser(name);
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