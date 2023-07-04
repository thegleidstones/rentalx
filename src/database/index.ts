import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1687921433158 } from "./migrations/1687921433158-CreateCategories";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentalx",
  synchronize: true,
  logging: true,
  entities: [Category],
  // migrations: [CreateCategories1687921433158],
  subscribers: [],
});

export function createConnection(host = "db"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource;
