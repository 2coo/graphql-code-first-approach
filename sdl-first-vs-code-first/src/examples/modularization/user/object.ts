import { builder } from "~/builder";

const UserTypeEnum = builder.enumType("UserType", {
  values: {
    HUMAN: {
      description: "A human user",
      value: "Human",
    },
    ROBOT: {
      description: "A robot user",
      value: "Robot",
    },
  },
});

export const UserObject = builder.simpleInterface("User", {
  fields: (t) => ({
    id: t.int({
      nullable: false,
    }),
    name: t.string({
      nullable: false,
    }),
    type: t.field({
      type: UserTypeEnum,
      nullable: false,
    }),
  }),
  resolveType: (user) => {
    if (user.type === "Human") {
      return "Human";
    } else {
      return "Robot";
    }
  },
});

builder.simpleObject("Human", {
  interfaces: [UserObject],
  fields: (t) => ({
    registrationNumber: t.string({
      description: "The registration number of the human",
      nullable: false,
    }),
  }),
});

builder.simpleObject("Robot", {
  interfaces: [UserObject],
  fields: (t) => ({
    modelNumber: t.string({
      description: "The model number of the robot",
      nullable: false,
    }),
  }),
});
