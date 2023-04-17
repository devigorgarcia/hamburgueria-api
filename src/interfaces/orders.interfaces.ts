import { z } from "zod";
import { createOrderSchema } from "../schemas/orders.schemas";

export type createOrderInterface = z.infer<typeof createOrderSchema>;
