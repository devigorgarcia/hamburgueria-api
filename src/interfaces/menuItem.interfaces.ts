import { createMenuItemSchema } from "./../schemas/menuItem.schemas";
import { z } from "zod";

export type createMenuItem = z.infer<typeof createMenuItemSchema>;

