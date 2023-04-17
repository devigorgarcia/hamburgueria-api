import { z } from "zod";
import { createOrderSchema } from "../schemas/orders.schemas";

export type ICreateOrder = z.infer<typeof createOrderSchema>;
