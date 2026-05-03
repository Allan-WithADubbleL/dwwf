import {setupPermissions} from "../applications/users";
import {DATABASE_URL} from "../settings";

import {PrismaClient} from "@prisma/client";
import {PrismaBetterSqlite3} from "@prisma/adapter-better-sqlite3";


async function init() {
    const adapter = new PrismaBetterSqlite3({
        url: DATABASE_URL,
    });
    const database = new PrismaClient({ adapter });

    await setupPermissions(database)
}

init().then()