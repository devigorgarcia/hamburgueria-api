import { Router } from "express";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { createMenuItemSchema } from "../schemas/menuItem.schemas";
import { createMenuItemController } from "../controllers/menuItem.controllers";

const routes = Router();

export const menuItemRoutes = () => {
  routes.post(
    "",
    validatedDataMiddleware(createMenuItemSchema),
    createMenuItemController
  );

  return routes
};
