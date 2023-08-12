import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "Category_ID",
      daily_rate: 111,
      description: "Car Description Test",
      fine_amount: 40,
      license_plate: "aaaa",
      name: "Car Name",
    });

    const cars = await listCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });
});
