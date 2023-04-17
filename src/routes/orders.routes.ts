import { Router } from "express";
import {
  createOrderController,
  listOrdersController,
} from "../controllers/orders.controllers";

const routes = Router();

export const ordersRoutes = () => {
  routes.post("", createOrderController);
  routes.get("", listOrdersController);

  return routes;
};
