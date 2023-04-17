import { Router } from "express";
import {
  createOrderController,
  deleteOrderController,
  listOrderDetailController,
  listOrdersController,
  updateOrderStatusController,
} from "../controllers/orders.controllers";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { updateOrderSchema } from "../schemas/orders.schemas";

const routes = Router();

export const ordersRoutes = () => {
  routes.post("", createOrderController);
  routes.get("", listOrdersController);
  routes.get("/:id", listOrderDetailController);
  routes.patch(
    "/statusOrder",
    validatedDataMiddleware(updateOrderSchema),
    updateOrderStatusController
  );
  routes.delete("/:id", deleteOrderController);

  return routes;
};
