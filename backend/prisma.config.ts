import { defineConfig } from "prisma/config";
import { DATABASE_URL } from "./settings";

export default defineConfig({
  schema: "database/schema.prisma",
  migrations: {
    path: "database/migrations",
  },
  datasource: {
    url: DATABASE_URL
  },
});
