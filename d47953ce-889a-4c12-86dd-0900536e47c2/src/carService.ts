export class CarService {
  private cars: string[] = [];

  listCars() {
    return this.cars;
  }

  $addCar(car: string) {
    this.cars.push(car);
    return car;
  }
}
