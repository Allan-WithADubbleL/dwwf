import {PrismaClient} from "@prisma/client";

export interface Permission {
    id: number
    name: string
}

export const ADMIN_PERMISSION: Permission ={id: 0, name: "admin"}
export const USER_PERMISSION:  Permission = {id: 1, name: "user"}

const permissions = [
    ADMIN_PERMISSION,
    USER_PERMISSION
];

export async function setupPermissions(database: PrismaClient) {
   await database.permission.createMany({
       data: permissions,
       });
}