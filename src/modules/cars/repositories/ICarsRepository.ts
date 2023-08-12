import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findAvailable(): Promise<Car[]>;
  findByName(name: string): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findByBrand(brand: string): Promise<Car[]>;
  findByCategory(category_id: string): Promise<Car[]>;
  list(): Promise<Car[]>;
}

export { ICarsRepository };
