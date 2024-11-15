export class ManufacturerService {
    private manufacturers: { id: number, name: string }[] = [];

    addManufacturer(id: number, name: string): void {
        this.manufacturers.push({ id, name });
    }

    listManufacturers(): { id: number, name: string }[] {
        return this.manufacturers;
    }

    findManufacturerById(id: number): { id: number, name: string } | undefined {
        return this.manufacturers.find(manufacturer => manufacturer.id === id);
    }

    $updateManufacturer(id: number, name: string): boolean {
        const manufacturer = this.findManufacturerById(id);
        if (manufacturer) {
            manufacturer.name = name;
            return true;
        }
        return false;
    }

    $deleteManufacturer(id: number): boolean {
        const index = this.manufacturers.findIndex(manufacturer => manufacturer.id === id);
        if (index !== -1) {
            this.manufacturers.splice(index, 1);
            return true;
        }
        return false;
    }
}