import { Application } from "express";
import { categoriesRoutes } from "./categories.routes";
import { menuItemRoutes } from "./menuItem.routes";
import { usersRoutes } from "./users.routes";
import { ordersRoutes } from "./orders.routes";

export const appRoutes = (app: Application) => {
  app.use("/category", categoriesRoutes());
  app.use("/menuItem", menuItemRoutes());
  app.use("/users", usersRoutes());
  app.use("/orders", ordersRoutes());
};
