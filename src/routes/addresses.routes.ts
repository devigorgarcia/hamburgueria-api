import { Router } from "express";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import { createAddressController } from "../controllers/addresses.controllers";

const routes = Router();

export const addressesRoutes = () => {
  routes.post("", ensureTokenMiddleware, createAddressController);

  return routes;
};
