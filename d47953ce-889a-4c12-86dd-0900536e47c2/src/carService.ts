export class CarService {
  private cars: { id: number; model: string; brand: string }[] = [];

  addCar(id: number, model: string, brand: string) {
    this.cars.push({ id, model, brand });
  }

  removeCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id);
  }

  listCars() {
    return this.cars;
  }

  findCarById(id: number) {
    return this.cars.find(car => car.id === id);
  }
}