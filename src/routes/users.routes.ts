import { Router } from "express";
import {
  createUserController,
  listUsersController,
} from "../controllers/users.controller";

import { createUserSchema } from "../schemas/users.schemas";
import { ensureUserExists } from "../middlewares/ensureUserExists.middleware";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";

const routes = Router();

export const usersRoutes = () => {
  routes.post(
    "",
    validatedDataMiddleware(createUserSchema),
    ensureUserExists,
    createUserController
  );

  routes.get("", listUsersController);

  return routes;
};
