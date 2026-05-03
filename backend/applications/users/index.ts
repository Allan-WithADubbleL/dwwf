import {PrismaClient} from "@prisma/client";
import {ADMIN_PERMISSION, Permission} from "./permissions";

import * as settings from "../../settings"

export async function createUser(
    name: string,
    permissions: Permission[],
    database: PrismaClient) {
    await database.user.create({
        data: {
            name: name,
            permissions: {
                connect: permissions
            }
        }
    }
    )
}

export async function createAdmin(database: PrismaClient) {
    await database.user.create({
            data: {
                name: settings.ADMIN_NAME,
                permissions: {
                    connect: [ADMIN_PERMISSION]
                }
            }
        }
    )
}

export * from "./permissions"