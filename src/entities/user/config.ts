import { AdminBuilderConfig } from "@/admin-builder/_types";

export const entityConfig: AdminBuilderConfig = {
  name: "users",
  title: "Users",
  fields: [
    {
      name: "name",
      type: "text",
      title: "Name",
    },
    {
      name: "role",
      type: "select",
      title: "Role",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};
