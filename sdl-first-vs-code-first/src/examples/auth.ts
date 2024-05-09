import { builder } from "~/builder";

// user.ts
const User = builder.simpleObject("User", {
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

// profile.ts
const Profile = builder.simpleObject("Profile", {
  fields: (t) => ({
    id: t.string({
      nullable: false,
    }),
    bio: t.string({
      nullable: false,
    }),
  }),
});
builder.objectType(User, {
  fields: (f) => ({
    profile: f.field({
      type: Profile,
      nullable: false,
      resolve: (parent) => ({
        id: "1",
        bio: `Bio of ${parent.name}`,
      }),
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    hello: t
      .withAuth({
        loggedIn: true,
      })
      .string({
        resolve: (_parent, _args, ctx) => `Hello ${ctx.user?.name}!`,
      }),
  }),
});

builder.queryField("me", (t) =>
  t
    .withAuth({
      loggedIn: true,
    })
    .field({
      type: User,
      nullable: false,
      resolve: (_parent, _args, { user }) => user,
    })
);

builder.objectField(User, "greetToMe", (t) =>
  t
    .withAuth({
      loggedIn: true,
    })
    .field({
      type: "String",
      description: "Say hello to logged in user",
      resolve: (parent, _args, ctx) =>
        `Hello '${ctx.user.name}', My name is '${parent.name}!'`,
    })
);

builder.queryField("GustavoFring", (t) =>
  t.field({
    type: User,
    resolve: () => ({
      id: 2,
      name: "Gustavo Fring",
    }),
  })
);

export const schema = builder.toSchema();
