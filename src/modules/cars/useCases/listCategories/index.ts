import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUSeCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );

  return listCategoriesController;
};
