import { dummyEndpoint } from "../lib/dummy-rest-api-sdk.js";
import { builder } from "~/builder";

const UserObject = builder.simpleObject("User", {
  fields: (t) => ({
    id: t.int({
      nullable: false,
      description: "The ID of the user",
    }),
    name: t.string({
      description: "The name of the user",
      nullable: false,
    }),
  }),
});

builder.objectField(UserObject, "posts", (t) =>
  t.field({
    type: [PostObject],
    nullable: false,
    resolve: async (user) => {
      const posts = await dummyEndpoint.getUserPosts(user.id);
      return posts;
    },
  })
  // ** N+1 problem **
  // Uncomment this to fix the N+1 problem
  // Solved by: Batching user ids and fetching posts in a single request
  //
  // t.loadableGroup({
  //   type: PostObject,
  //   load: (ids: number[]) => dummyEndpoint.getPostsByUserIds(ids),
  //   group: (post) => post.userId,
  //   resolve: (user) => user.id,
  // })
);

const PostObject = builder.simpleObject("Post", {
  fields: (t) => ({
    id: t.int({
      nullable: false,
    }),
    title: t.string({
      description: "The title of the post",
      nullable: false,
    }),
    content: t.string({
      description: "The content of the post",
      nullable: false,
    }),
    userId: t.int({
      description: "The user ID of the post",
      nullable: false,
    }),
  }),
});

builder.objectField(PostObject, "user", (t) =>
  t.field({
    type: UserObject,
    nullable: false,
    resolve: async (post) => {
      const user = await dummyEndpoint.getUserById(post.userId);
      return user;
    },
  })
);

builder.queryField("users", (t) =>
  t.field({
    type: [UserObject],
    nullable: false,
    resolve: async () => {
      const users = await dummyEndpoint.getUsers();
      return users;
    },
  })
);

builder.queryType({});

export const schema = builder.toSchema();
