import { Router } from "express";
import {
  createOrderController,
  listOrdersController,
  updateOrderStatusController,
} from "../controllers/orders.controllers";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { updateOrderSchema } from "../schemas/orders.schemas";

const routes = Router();

export const ordersRoutes = () => {
  routes.post("", createOrderController);
  routes.get("", listOrdersController);
  routes.patch(
    "/statusOrder",
    validatedDataMiddleware(updateOrderSchema),
    updateOrderStatusController
  );

  return routes;
};
