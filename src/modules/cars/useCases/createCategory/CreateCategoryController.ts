import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    console.log(request.body);
    console.log("passou no CreateCategoryController");
    console.log("recebeu dados do REQUES?");
    console.log("Name: ", name);
    console.log("Description: ", description);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
