import { Request, Response } from "express";
import { createAddressService } from "../services/addresses/createAddress.services";

export const createAddressController = async (req: Request, res: Response) => {
  const data = req.body;

  const newAddress = await createAddressService(data);

  return res.json({ newAddress });
};
