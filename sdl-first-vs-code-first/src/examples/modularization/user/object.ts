import { builder } from "~/builder";

export const UserObject = builder.simpleObject("User", {
  fields: (t) => ({
    id: t.int({
      nullable: false,
    }),
    name: t.string({
      description: "The name of the user",
      nullable: false,
    }),
  }),
});
