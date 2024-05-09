import { Hono } from "hono";
import { posts } from "../data.js";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono()
  .get("/", (c) => {
    return c.json({ posts });
  })
  .get("/:id", (c) => {
    const id = parseInt(c.req.param("id"));
    return c.json({
      post: posts.find((post) => post.id === id),
    });
  })
  .post(
    "/users",
    zValidator("json", z.object({ ids: z.array(z.number()) })),
    (c) => {
      const { ids } = c.req.valid("json");
      return c.json({
        posts: posts.filter((post) => ids.includes(post.userId)),
      });
    }
  );

export default app;
