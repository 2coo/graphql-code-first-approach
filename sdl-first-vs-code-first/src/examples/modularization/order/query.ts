import { builder } from "~/builder";
import { OrderObject } from "./object";
import { dummyOrders } from "~/data";
import { GraphQLError } from "graphql";

builder.queryFields((t) => ({
  order: t.field({
    type: OrderObject,
    args: {
      id: t.arg.int({
        required: true,
      }),
    },
    resolve: (_parent, args) => {
      const { id } = args;
      const foundOrder = dummyOrders.find((order) => order.id === id);
      if (!foundOrder) {
        throw new GraphQLError("Order not found");
      }
      return foundOrder;
    },
  }),
  orders: t.field({
    type: [OrderObject],
    args: {
      gtTotal: t.arg.float(),
    },
    resolve: (parent, args) => {
      const { gtTotal } = args;
      const filteredOrders = dummyOrders.filter((order) => {
        const total = order.items.reduce<number>(
          (acc, item) => acc + item.price,
          0
        );
        return gtTotal ? total < gtTotal : true;
      });
      return filteredOrders;
    },
  }),
}));
