import type { YogaInitialContext } from "graphql-yoga";
import { UserShape } from "./types";
import { IncomingMessage, OutgoingMessage } from "node:http";
import { dummyUsers } from "~/data";

export interface GraphQLContext extends YogaInitialContext {
  req: IncomingMessage;
  res: OutgoingMessage;
  user?: UserShape;
}

type ContextWithNodeHttp = YogaInitialContext & {
  req: IncomingMessage;
  res: OutgoingMessage;
};

export const createContext: (
  args: ContextWithNodeHttp
) => Promise<GraphQLContext> = async ({ req, res, ...initialContext }) => {
  const userId = req.headers["authorization"];
  let user;
  if (userId) {
    user = dummyUsers.find((user) => user.id === parseInt(userId));
  }
  return {
    req,
    res,
    user,
    ...initialContext,
  };
};
