export class FlightService {
  private flights: any[] = [];

  constructor() {
    // Initialize with some dummy data
    this.flights = [
      { id: 1, airline: 'Airways A', destination: 'City X', departure: 'City Y' },
      { id: 2, airline: 'Airways B', destination: 'City Z', departure: 'City Y' },
    ];
  }

  listFlights() {
    return this.flights;
  }

  findFlightById(id: number) {
    return this.flights.find(flight => flight.id === id);
  }

  $addFlight(flight: { id: number; airline: string; destination: string; departure: string; }) {
    this.flights.push(flight);
  }

  $removeFlight(id: number) {
    this.flights = this.flights.filter(flight => flight.id !== id);
  }
}
