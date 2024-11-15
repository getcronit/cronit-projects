interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

class CarService {
  private cars: Car[] = [];
  private nextId: number = 1;

  listCars(): Car[] {
    return this.cars;
  }

  $createCar(make: string, model: string, year: number): Car {
    const newCar: Car = { id: this.nextId++, make, model, year };
    this.cars.push(newCar);
    return newCar;
  }

  $updateCar(id: number, make: string, model: string, year: number): Car | null {
    const carIndex = this.cars.findIndex(car => car.id === id);
    if (carIndex === -1) return null;
    this.cars[carIndex] = { id, make, model, year };
    return this.cars[carIndex];
  }

  $deleteCar(id: number): boolean {
    const carIndex = this.cars.findIndex(car => car.id === id);
    if (carIndex === -1) return false;
    this.cars.splice(carIndex, 1);
    return true;
  }
}

export default new CarService();