// NOTE: If Intellisense is not working for you,
// Please add "graphql-config.load.rootDir": "./frontend" to your workspace settings (.vscode/settings.json)

export default {
  schema: "http://localhost:4000/graphql",
  documents: ["./src/**/*.graphql", "src/**/*.{ts,tsx}"],
};
