import { Request, Response } from "express";
import { createMenuItemService } from "../services/menuItem/createMenuItem.service";
import { listMenuItensService } from "../services/menuItem/listMenuItens.service";

export const createMenuItemController = async (req: Request, res: Response) => {
  const data = req.body;

  const newItem = await createMenuItemService(data);

  res.status(201).json(newItem);
};

export const listMenuItemController = async (req: Request, res: Response) => {
  const query = req.query;

  const menuList = await listMenuItensService(query);

  return res.json(menuList);
};
