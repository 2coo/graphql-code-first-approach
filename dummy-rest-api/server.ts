import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import users from "./routes/users.js";
import posts from "./routes/posts.js";

const app = new Hono();

app.use(logger());

const routes = app.route("/users", users).route("/posts", posts);

export type AppType = typeof routes;

serve(
  {
    fetch: routes.fetch.bind(app),
    port: 4001,
  },
  (server) => {
    console.log(`Server running at http://localhost:${server.port}`);
  }
);
