import { builder } from "~/builder";
import { OrderObject } from "../order";
import { UserObject } from "./object";
import { dummyUsers } from "~/data";

builder.objectField(OrderObject, "createdUser", (t) =>
  t.field({
    type: UserObject,
    nullable: true,
    resolve: (order) =>
      dummyUsers.find((user) => user.id === order.createdUserId),
  })
);
