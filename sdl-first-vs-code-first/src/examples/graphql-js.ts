import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";

const User = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "Hello world!";
        },
      },
      stringField: {
        type: GraphQLString,
        resolve() {
          return 123;
        },
      },
      floatField: {
        type: GraphQLFloat,
        resolve() {
          return "Hi, am I a float?";
        },
      },
      user: {
        type: new GraphQLNonNull(User),
        resolve() {
          return "Am I a user?";
        },
      },
    },
  }),
});

export { schema };
