import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUSeCase);

    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
