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
    const car = this.cars.find(car => car.id === id);
    if (car) {
      car.make = make;
      car.model = model;
      car.year = year;
      return car;
    }
    return null;
  }

  $deleteCar(id: number): boolean {
    const index = this.cars.findIndex(car => car.id === id);
    if (index !== -1) {
      this.cars.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default new CarService();
