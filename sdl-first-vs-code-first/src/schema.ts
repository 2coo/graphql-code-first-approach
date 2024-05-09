// sort-imports-ignore
import { writeFileSync } from "fs";
import { printSchema } from "graphql";
import { resolve } from "path";

// import { schema } from "./examples/sdl-as-string";
// import { schema } from "./examples/graphql-js";
// import { schema } from "./examples/object-ref";
// import { schema } from "./examples/simple-object";
// import { schema } from "./examples/n-plus-1";
// import { schema } from "./examples/auth";
import { schema } from "./examples/modularization";

export { schema };

writeFileSync(
  resolve(__dirname, "../schema.graphql"),
  printSchema(schema)
);
