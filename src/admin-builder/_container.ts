import { createContainer } from "tiny-invert";
import { AdminBuilderConfig } from "./_types";
import { Sql } from "postgres";

export const AdminEntityBuilderContainer = createContainer<{
  config: AdminBuilderConfig;
  dbClient: Sql;
}>();
