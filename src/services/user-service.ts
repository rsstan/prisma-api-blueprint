import * as userRepository from "../repositories/user-repository.js";

async function createUser(name: string, email: string) {
    const existingUser = await userRepository.getUserByEmail(email);

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    return userRepository.createUser(name, email);
}

async function getUsers() {
    return userRepository.getUsers();
}

async function getUserById(id: number) {
    const user = await userRepository.getUserById(id);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}

async function updateUser(
    id: number,
    name: string,
    email: string
) {
    const user = await userRepository.getUserById(id);

    if (!user) {
        throw new Error("User not found");
    }

    return userRepository.updateUser(id, name, email);
}

async function deleteUser(id: number) {
    const user = await userRepository.getUserById(id);

    if (!user) {
        throw new Error("User not found");
    }

    return userRepository.deleteUser(id);
}

export {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};