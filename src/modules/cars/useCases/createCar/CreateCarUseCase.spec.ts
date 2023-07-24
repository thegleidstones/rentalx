import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand Test",
      category_id: "test category ID",
      daily_rate: 90,
      description: "HB 20 Confortline",
      fine_amount: 50,
      license_plate: "KER-7436",
      name: "HB 20",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to update a license plate from a registred car", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Brand Test",
        category_id: "test category ID",
        daily_rate: 90,
        description: "HB 20 Confortline",
        fine_amount: 50,
        license_plate: "KER-7436",
        name: "HB 20 Branco",
      });

      await createCarUseCase.execute({
        brand: "Brand Test",
        category_id: "test category ID",
        daily_rate: 90,
        description: "HB 20 Confortline",
        fine_amount: 50,
        license_plate: "KER-7436",
        name: "HB 20 Cinza",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand Test",
      category_id: "test category ID",
      daily_rate: 90,
      description: "HB 20 Confortline",
      fine_amount: 50,
      license_plate: "KER-7436",
      name: "HB 20 Branco",
    });
    expect(car.available).toBe(true);
  });

  it("should not be able to create a new car if user is not an administrator", async () => {
    // await createCarUseCase.execute();
  });
});
