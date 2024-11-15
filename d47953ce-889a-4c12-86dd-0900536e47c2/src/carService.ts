export class CarService {
  private cars: { id: number; make: string; model: string; year: number }[] = [];
  private nextId: number = 1;

  $createCar(make: string, model: string, year: number) {
    const newCar = { id: this.nextId++, make, model, year };
    this.cars.push(newCar);
    return newCar;
  }

  $updateCar(id: number, make: string, model: string, year: number) {
    const carIndex = this.cars.findIndex(car => car.id === id);
    if (carIndex === -1) return null;
    this.cars[carIndex] = { id, make, model, year };
    return this.cars[carIndex];
  }

  $deleteCar(id: number) {
    const carIndex = this.cars.findIndex(car => car.id === id);
    if (carIndex === -1) return null;
    const [deletedCar] = this.cars.splice(carIndex, 1);
    return deletedCar;
  }

  listCars() {
    return this.cars;
  }

  findCarById(id: number) {
    return this.cars.find(car => car.id === id);
  }
}

export default new CarService();