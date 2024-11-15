import { app } from '@getcronit/pylon';
import userService from './userService';
import carService from './carService';
import { PlaneService } from './planeService';
import { AirportService } from './airportService';
import { PilotService } from './pilotService';
import { FlightService } from './flightService';
import { ManufacturerService } from './manufacturerService';

const planeService = new PlaneService();
const airportService = new AirportService();
const pilotService = new PilotService();
const flightService = new FlightService();
const manufacturerService = new ManufacturerService();

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
    },
    pilots: () => {
      console.log('Pilots query was called');
      return pilotService.listPilots();
    },
    pilotById: (id: number) => {
      console.log(`PilotById query was called with id: ${id}`);
      return pilotService.findPilotById(id);
    },
    flights: () => {
      console.log('Flights query was called');
      return flightService.listFlights();
    },
    flightById: (id: string) => {
      console.log(`FlightById query was called with id: ${id}`);
      return flightService.findFlightById(id);
    },
    manufacturers: () => {
      console.log('Manufacturers query was called');
      return manufacturerService.listManufacturers();
    },
    manufacturerById: (id: number) => {
      console.log(`ManufacturerById query was called with id: ${id}`);
      return manufacturerService.findManufacturerById(id);
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
    },
    createPilot: (id: number, name: string, experience: number) => {
      console.log(`CreatePilot mutation was called with id: ${id}, name: ${name}, experience: ${experience}`);
      pilotService.addPilot(id, name, experience);
    },
    updatePilotExperience: (id: number, experience: number) => {
      console.log(`UpdatePilotExperience mutation was called with id: ${id}, experience: ${experience}`);
      return pilotService.$updatePilotExperience(id, experience);
    },
    deletePilot: (id: number) => {
      console.log(`DeletePilot mutation was called with id: ${id}`);
      return pilotService.$removePilot(id);
    },
    createFlight: (id: string, origin: string, destination: string, duration: number) => {
      console.log(`CreateFlight mutation was called with id: ${id}, origin: ${origin}, destination: ${destination}, duration: ${duration}`);
      flightService.addFlight({ id, origin, destination, duration });
    },
    updateFlight: (id: string, updatedInfo: Partial<{ origin: string; destination: string; duration: number }>) => {
      console.log(`UpdateFlight mutation was called with id: ${id}`);
      flightService.$updateFlight(id, updatedInfo);
    },
    deleteFlight: (id: string) => {
      console.log(`DeleteFlight mutation was called with id: ${id}`);
      flightService.$deleteFlight(id);
    },
    createManufacturer: (id: number, name: string) => {
      console.log(`CreateManufacturer mutation was called with id: ${id}, name: ${name}`);
      manufacturerService.addManufacturer(id, name);
    },
    updateManufacturer: (id: number, name: string) => {
      console.log(`UpdateManufacturer mutation was called with id: ${id}, name: ${name}`);
      return manufacturerService.$updateManufacturer(id, name);
    },
    deleteManufacturer: (id: number) => {
      console.log(`DeleteManufacturer mutation was called with id: ${id}`);
      return manufacturerService.$deleteManufacturer(id);
    }
  }
};

export default app;
