import { EntitySchemaBuilder } from "@/admin-builder/entity-schema-builder";
import { entityConfig } from "./config";
import { dbClient } from "@/shared/db-client";

export const UserEntitySchema = EntitySchemaBuilder.init({
  config: entityConfig,
  dbClient,
});
