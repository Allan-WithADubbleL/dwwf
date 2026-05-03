import express, {Express} from "express";
import {PrismaClient} from "@prisma/client";
import {PrismaBetterSqlite3} from "@prisma/adapter-better-sqlite3";

import * as users from "./applications/users";
import * as settings from "./settings";

const app: Express = express();

const adapter = new PrismaBetterSqlite3({
    url: settings.DATABASE_URL,
});
const database = new PrismaClient({ adapter });

async function main() {
    await users.createAdmin(database)

    app.listen(settings.APPLICATION_PORT)

    app.get("/test", async (req, res) =>  {
        const allUsers = await database.user.findMany();
        res.send(allUsers);
    })
}

main().then()
