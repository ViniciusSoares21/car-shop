import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

export default class CarService {
  constructor(private model = new CarODM()) {}

  private createDoamin(car: ICar) {
    if (car) {
      return new Car(car);
    }

    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createDoamin(newCar);
  }

  public async getAllCars() {
    const cars = await this.model.getAll();
    return cars.map((car) => this.createDoamin(car));
  }

  public async getCarById(id: string) {
    const cars = await this.model.getById(id);
    return this.createDoamin(cars as ICar);
  }

  public async updateCar(id: string, car: ICar) {
    const updatedCar = await this.model.update(id, car);
    return this.createDoamin(updatedCar as ICar);
  }

  public async deleteCar(id: string) {
    await this.model.deleteCar(id);
  }
}