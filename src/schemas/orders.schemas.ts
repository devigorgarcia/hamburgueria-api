import { z } from "zod";
import { baseOrderItem, createOrderItem } from "./orderItems.schemas";

export const baseOrderSchema = z.object({
  id: z.string(),
  orderNumber: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  paymentMethod: z.string(),
  deliveryAddress: z.any(),
  orderConfirm: z.boolean(),
  finishedOrder: z.boolean(),
  userId: z.string(),
  orderItems: z.array(baseOrderItem),
});

export const createOrderSchema = baseOrderSchema
  .omit({
    id: true,
  })
  .extend({
    orderItems: z.array(createOrderItem),
  });
