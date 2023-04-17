import { z } from "zod";

export const baseMenuItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  imageURL: z.string(),
  description: z.string(),
  categoryId: z.string(),
  OrderItem: z.string(),
});

export const createMenuItemSchema = baseMenuItemSchema.omit({
  id: true,
  OrderItem: true,
});
