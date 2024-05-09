import { builder } from "~/builder";
import { UserShape } from "../types";

const User = builder.objectRef<UserShape>("User").implement({
  fields: (t) => ({
    id: t.exposeID("id", {
      nullable: false,
    }),
    name: t.exposeString("name", {
      nullable: false,
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => `Hello world!`,
    }),
    stringField: t.string({
      resolve: () => 123,
      // resolve: () => "Yes, I am a string!",
    }),
    floatField: t.float({
      resolve: () => "Hi, am I a float?",
      // resolve: () => 123.456,
    }),
    user: t.field({
      type: User,
      nullable: false,
      resolve: () => "Am I a user?",
      // resolve: () => ({
      //   id: "1",
      //   name: "Tuco Salamanca",
      // }),
    }),
  }),
});

export const schema = builder.toSchema();
