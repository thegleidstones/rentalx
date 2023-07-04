import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    console.log(request.body);
    console.log("passou no CreateCategoryController");
    console.log("recebeu dados do REQUES?");
    console.log("Name: ", name);
    console.log("Description: ", description);

    await this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
