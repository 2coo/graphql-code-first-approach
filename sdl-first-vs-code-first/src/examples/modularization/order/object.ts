import { builder } from "~/builder";
import { UserObject } from "../user";
import { dummyOrders } from "~/data";

const OrderItemObject = builder.simpleObject("OrderItem", {
  fields: (t) => ({
    id: t.int({
      nullable: false,
      description: "The ID of the order item",
    }),
    name: t.string({
      description: "The name of the order item",
      nullable: false,
    }),
    price: t.float({
      description: "The price of the order item",
      nullable: false,
    }),
  }),
});

export const OrderObject = builder.simpleObject(
  "Order",
  {
    fields: (t) => ({
      id: t.int({
        nullable: false,
        description: "The ID of the order",
      }),
      items: t.field({
        type: [OrderItemObject],
        nullable: false,
        description: "The items in the order",
      }),
      createdUserId: t.int({
        nullable: false,
      }),
    }),
  },
  (t) => ({
    total: t.float({
      nullable: false,
      description: "The total price of the order",
      resolve: (order) => {
        return order.items.reduce<number>(
          (total, item) => total + item.price,
          0
        );
      },
    }),
  })
);