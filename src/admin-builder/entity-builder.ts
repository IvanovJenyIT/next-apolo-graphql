import { createModule } from "tiny-invert";
import { EntityPageProvider } from "./_entity_page";
import { AdminEntityBuilderContainer } from "./_container";

export type { AdminBuilderConfig, AdminBuilderField } from "./_types";

const EntryProvider = AdminEntityBuilderContainer.provider(
  (ctx) => ({
    EntityPage: ctx.innerDeps.EntityPage,
  }),
  {
    EntityPage: EntityPageProvider,
  }
);

export const EntityBuilder = createModule(EntryProvider);
