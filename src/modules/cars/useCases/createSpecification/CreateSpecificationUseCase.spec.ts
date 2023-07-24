import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryinMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Specification", () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationsRepositoryInMemory
    );
  });

  it("should be able to create a specification", async () => {
    const specification = {
      name: "Specification Name Test",
      description: "Specification Description Teste",
    };

    await createSpecificationUseCase.execute({
      name: specification.name,
      description: specification.description,
    });

    const specificationCreated =
      await specificationsRepositoryInMemory.findByName(specification.name);

    expect(specificationCreated).toHaveProperty("id");
  });

  it("should not be able to create a specification with the same name", async () => {
    expect(async () => {
      const specification = {
        name: "Specification Name Test 02",
        description: "Specification Description Test 03",
      };

      await createSpecificationUseCase.execute({
        name: specification.name,
        description: specification.description,
      });

      await createSpecificationUseCase.execute({
        name: specification.name,
        description: specification.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
