import { Request, Response } from "express";

import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUSeCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listCategoriesUseCase.execute();
    console.log(all);

    return response.json(all);
  }
}

export { ListCategoriesController };
