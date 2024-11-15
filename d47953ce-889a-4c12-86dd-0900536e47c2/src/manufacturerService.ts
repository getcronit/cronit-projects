// Manufacturer Service
// This service will handle operations related to manufacturers.

export class ManufacturerService {
    private manufacturers: any[] = [];

    // Add a new manufacturer
    $addManufacturer(manufacturer: any) {
        this.manufacturers.push(manufacturer);
    }

    // Retrieve all manufacturers
    allManufacturers() {
        return this.manufacturers;
    }

    // Find a manufacturer by ID
    findManufacturerById(id: string) {
        return this.manufacturers.find(manufacturer => manufacturer.id === id);
    }

    // Update a manufacturer by ID
    $updateManufacturer(id: string, updatedInfo: any) {
        const manufacturerIndex = this.manufacturers.findIndex(manufacturer => manufacturer.id === id);
        if (manufacturerIndex !== -1) {
            this.manufacturers[manufacturerIndex] = { ...this.manufacturers[manufacturerIndex], ...updatedInfo };
        }
    }

    // Delete a manufacturer by ID
    $deleteManufacturer(id: string) {
        this.manufacturers = this.manufacturers.filter(manufacturer => manufacturer.id !== id);
    }
}
