export class FlightService {
    private flights: any[] = [];

    addFlight(flight: any) {
        this.flights.push(flight);
    }

    listFlights() {
        return this.flights;
    }

    findFlightById(id: string) {
        return this.flights.find(flight => flight.id === id);
    }

    $updateFlight(id: string, updatedFlight: any) {
        const index = this.flights.findIndex(flight => flight.id === id);
        if (index !== -1) {
            this.flights[index] = { ...this.flights[index], ...updatedFlight };
        }
    }

    $deleteFlight(id: string) {
        this.flights = this.flights.filter(flight => flight.id !== id);
    }
}