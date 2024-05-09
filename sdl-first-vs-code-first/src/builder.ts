import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import DataloaderPlugin from "@pothos/plugin-dataloader";
import { UserShape } from "./types";
import { GraphQLError } from "graphql";

type GraphQLContext = {
  user?: UserShape;
};

export const builder = new SchemaBuilder<{
  Context: GraphQLContext;
  AuthScopes: {
    loggedIn: boolean;
  };
  AuthContexts: {
    loggedIn: Required<GraphQLContext>;
  };
}>({
  plugins: [SimpleObjectsPlugin, DataloaderPlugin, ScopeAuthPlugin],
  authScopes: async (context) => ({
    loggedIn: !!context.user,
  }),
  scopeAuthOptions: {
    treatErrorsAsUnauthorized: true,
    unauthorizedError: () =>
      new GraphQLError("You must be logged in to do that.", {
        extensions: {
          http: {
            status: 401,
          },
        },
      }),
  },
});
