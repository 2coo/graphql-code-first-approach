import { Hono } from "hono";
import { posts, users } from "../data.js";

const app = new Hono()
  .get("/", (c) => {
    return c.json({
      users,
    });
  })
  .get("/:id", (c) => {
    const id = parseInt(c.req.param("id"));
    return c.json({
      user: users.find((user) => user.id === id) ?? null,
    });
  })
  .get("/:id/posts", (c) => {
    const id = parseInt(c.req.param("id"));
    return c.json({
      posts: posts.filter((post) => post.userId === id),
    });
  });

export default app;
