import { GraphQLError } from "graphql";
import { builder } from "~/builder";
import { dummyUsers } from "~/data";
import { UserObject } from "./object";

builder.queryFields((t) => ({
  user: t.field({
    type: UserObject,
    args: {
      id: t.arg.int({
        required: true,
      }),
    },
    resolve: (_parent, args) => {
      const { id } = args;
      const foundOrder = dummyUsers.find((order) => order.id === id);
      if (!foundOrder) {
        throw new GraphQLError("User not found");
      }
      return foundOrder;
    },
  }),
  users: t.field({
    type: [UserObject],
    args: {
      nameIncludes: t.arg.string(),
    },
    resolve: (_parent, args) => {
      const { nameIncludes } = args;
      const filteredOrders = dummyUsers.filter((order) =>
        nameIncludes ? order.name.includes(nameIncludes) : true
      );
      return filteredOrders;
    },
  }),
}));
