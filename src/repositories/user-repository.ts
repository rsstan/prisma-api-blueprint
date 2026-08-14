import prisma from "../db/prisma.js";

async function createUser(name: string, email: string) {
    return prisma.user.create({
        data: {
            name,
            email,
        },
    });
}

async function getUsers() {
    return prisma.user.findMany();
}

async function getUserById(id: number) {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

async function getUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

async function updateUser(
    id: number,
    name: string,
    email: string
) {
    return prisma.user.update({
        where: {
            id,
        },

        data: {
            name,
            email,
        },
    });
}

async function deleteUser(id: number) {
    return prisma.user.delete({
        where: {
            id,
        },
    });
}

export {
    createUser,
    getUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser,
};