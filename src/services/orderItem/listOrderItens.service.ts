import { prisma } from "../../app";

export const listOrderItensService = async () => {
  const orderItensList = await prisma.orderItem.findMany();

  console.log(orderItensList)

  return orderItensList;
};
