import { Request, Response } from "express";
import { createOrderService } from "../services/orders/createOrder.service";
import { listOrdersService } from "../services/orders/listOrders.service";

export const createOrderController = async (req: Request, res: Response) => {
  const data = req.body;

  const newOrder = await createOrderService(data);

  return res.json(newOrder);
};

export const listOrdersController = async (req: Request, res: Response) => {
  const listOrders = await listOrdersService();

  return res.json(listOrders);
};
