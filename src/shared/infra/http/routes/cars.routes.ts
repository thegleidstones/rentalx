import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarController = new ListCarsController();

carsRoutes.use(ensureAuthenticated);

carsRoutes.post("/", createCarController.handle);
carsRoutes.get("/", listCarController.handle);

export { carsRoutes };
