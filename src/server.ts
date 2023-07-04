/* eslint-disable import/no-extraneous-dependencies */
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { createConnection } from "./database";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use(cors());

createConnection();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
