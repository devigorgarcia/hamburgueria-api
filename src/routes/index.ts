import { Application } from "express";
import { categoriesRoutes } from "./categories.routes";
import { menuItemRoutes } from "./menuItem.routes";

export const appRoutes = (app: Application) => {
  app.use("/category", categoriesRoutes());
  app.use("/menuItem", menuItemRoutes());
};
