import { Request, Response } from "express";
import { listOrderItensService } from "../services/orderItem/listOrderItens.service";
import { listOrderItemDetailsService } from "../services/orderItem/listOrderItemDetails.service";

export const listOrderItensController = async (req: Request, res: Response) => {
  const listOrderItens = await listOrderItensService();

  return res.json(listOrderItens);
};

export const listOrderItemDetails = async (req: Request, res: Response) => {
  const { id } = req.params;

  const orderItemDetails = await listOrderItemDetailsService(id);

  return res.json(orderItemDetails);
};
