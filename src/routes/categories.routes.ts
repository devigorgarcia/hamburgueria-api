import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
} from "../controllers/categories.controller";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";

const routes = Router();

export const categoriesRoutes = () => {
  routes.post(
    "",
    validatedDataMiddleware(createCategorySchema),
    createCategoryController
  );
  routes.get("", listCategoriesController);

  return routes;
};
