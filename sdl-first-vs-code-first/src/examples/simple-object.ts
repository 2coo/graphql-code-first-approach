import { builder } from "~/builder";

const User = builder.simpleObject("User", {
  fields: (t) => ({
    id: t.string({
      nullable: false,
    }),
    name: t.string({
      description: "The name of the user",
      nullable: false,
    }),
  }),
});

type UserShape = typeof User.$inferType;

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => `Hello world!`,
    }),
    stringField: t.string({
      // resolve: () => 123,
      resolve: () => "Yes, I am a string!",
    }),
    floatField: t.float({
      // resolve: () => "Hi, am I a float?",
      resolve: () => 123.456,
    }),
    user: t.field({
      type: User,
      nullable: false,
      // resolve: () => "Am I a user?",
      resolve: () => ({
        id: "1",
        name: "Tuco Salamanca",
      }),
    }),
  }),
});

export const schema = builder.toSchema();
