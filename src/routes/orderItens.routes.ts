import { Router } from "express";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import {
  listOrderItemDetails,
  listOrderItensController,
} from "../controllers/orderItens.controllers";

const routes = Router();

export const orderItensRoutes = () => {
  routes.get("", ensureTokenMiddleware, listOrderItensController);

  routes.get("/:id", ensureTokenMiddleware, listOrderItemDetails);

  return routes;
};
