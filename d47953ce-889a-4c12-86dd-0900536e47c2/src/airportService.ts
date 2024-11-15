// AirportService.ts

export class AirportService {
    private airports: { id: number, name: string, location: string }[] = [];

    addAirport(id: number, name: string, location: string): void {
        this.airports.push({ id, name, location });
    }

    findAirportById(id: number): { id: number, name: string, location: string } | undefined {
        return this.airports.find(airport => airport.id === id);
    }

    listAirports(): { id: number, name: string, location: string }[] {
        return this.airports;
    }

    $removeAirport(id: number): boolean {
        const index = this.airports.findIndex(airport => airport.id === id);
        if (index !== -1) {
            this.airports.splice(index, 1);
            return true;
        }
        return false;
    }
}