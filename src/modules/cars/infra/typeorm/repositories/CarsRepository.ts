import { Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import AppDataSource from "@shared/infra/typeorm";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    await this.repository.save(car);

    return car;
  }

  async findAvailable(): Promise<Car[]> {
    const cars = await this.repository.find({ where: { available: true } });
    return cars;
  }

  async findByName(name: string): Promise<Car> {
    const car = await this.repository.findOne({ where: { name } });
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ where: { license_plate } });
    return car;
  }

  async findByBrand(brand: string): Promise<Car[]> {
    const cars = await this.repository.find({ where: { brand } });
    return cars;
  }

  async findByCategory(category_id: string): Promise<Car[]> {
    const cars = await this.repository.find({ where: { category_id } });
    return cars;
  }

  async list(): Promise<Car[]> {
    const cars = await this.repository.find();
    return cars;
  }
}

export { CarsRepository };
