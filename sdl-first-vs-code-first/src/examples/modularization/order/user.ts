import { builder } from "~/builder";
import { UserObject } from "../user";
import { OrderObject } from "./object";
import { dummyOrders } from "~/data";

builder.objectField(UserObject, "orders", (t) =>
  t.field({
    type: [OrderObject],
    nullable: false,
    resolve: (user) => {
      return dummyOrders.filter((order) => order.createdUserId == user.id);
    },
  })
);
