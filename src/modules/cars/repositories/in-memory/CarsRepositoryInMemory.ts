import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    brand,
    daily_rate,
    fine_amount,
    license_plate,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      brand,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
    });

    this.cars.push(car);

    return car;
  }

  async findAvailable(): Promise<Car[]> {
    const cars = this.cars.filter((car) => car.available === true);
    return cars;
  }

  async findByName(name: string): Promise<Car> {
    const car = this.cars.find((car) => car.name === name);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.license_plate === license_plate);
    return car;
  }

  async findByBrand(brand: string): Promise<Car[]> {
    return null;
  }
  async findByCategory(category_id: string): Promise<Car[]> {
    return null;
  }

  async list(): Promise<Car[]> {
    const all = this.cars;
    return all;
  }
}

export { CarsRepositoryInMemory };
