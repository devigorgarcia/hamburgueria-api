import { Router } from "express";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { createMenuItemSchema } from "../schemas/menuItem.schemas";
import {
  createMenuItemController,
  listMenuItemController,
  listMenuItemDetailController,
} from "../controllers/menuItem.controllers";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";

const routes = Router();

export const menuItemRoutes = () => {
  routes.post(
    "",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    validatedDataMiddleware(createMenuItemSchema),
    createMenuItemController
  );
  routes.get("", listMenuItemController);
  routes.get("/:id", listMenuItemDetailController);

  return routes;
};
