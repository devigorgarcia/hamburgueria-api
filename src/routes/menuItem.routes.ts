import { Router } from "express";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { createMenuItemSchema } from "../schemas/menuItem.schemas";
import {
  createMenuItemController,
  listMenuItemController,
} from "../controllers/menuItem.controllers";

const routes = Router();

export const menuItemRoutes = () => {
  routes.post(
    "",
    validatedDataMiddleware(createMenuItemSchema),
    createMenuItemController
  );
  routes.get("", listMenuItemController);

  return routes;
};
