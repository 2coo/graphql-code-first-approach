import { buildSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

// SDL as a string
const typeDefs = buildSchema(`
  type User {
    id: ID!
    name: String!
  }
  type Query {
      hello: String
      stringField: String
      floatField: Float
      user: User!
  }
`);

// Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    stringField: () => 123,
    floatField: () => "Hi, am I a float?",
    user: () => "Am I a user?",
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
