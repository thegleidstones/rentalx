import { Request, Response } from "express";

import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUSeCase) {}

  handle(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute();
    console.log(all);

    return response.json(all);
  }
}

export { ListCategoriesController };
