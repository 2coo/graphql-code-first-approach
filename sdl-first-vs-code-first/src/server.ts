import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { createContext } from "./context";
import { schema } from "./schema";

const yoga = createYoga({
  context: createContext,
  schema,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log(`🚀 GraphQL server ready at http://localhost:4000/graphql`);
});
