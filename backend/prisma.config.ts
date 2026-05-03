import { defineConfig } from "prisma/config";
import * as settings from "./settings"

export default defineConfig({
  schema: "database/schema",
  migrations: {
    path: "database/migrations",
  },
  datasource: {
    url: settings.DATABASE_URL,
  },
});
