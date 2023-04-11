import { Request, Response } from "express";
import { createMenuItemService } from "../services/menuItem/createMenuItem.service";

export const createMenuItemController = async (req: Request, res: Response) => {
  const data = req.body;

  const newItem = await createMenuItemService(data);

  res.status(201).json(newItem)
};
