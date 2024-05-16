import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: "src/**/!(*.d).{ts,tsx}",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
