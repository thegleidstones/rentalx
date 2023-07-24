import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserUSeCase } from "./ListUserUseCase";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUserUseCase = container.resolve(ListUserUSeCase);
    const all = await listUserUseCase.execute();

    return response.json(all).send();
  }
}

export { ListUserController };
