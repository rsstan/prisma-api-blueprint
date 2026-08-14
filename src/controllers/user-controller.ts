import { Request, Response, NextFunction } from "express";

import * as userService from "../services/user-service.js";

async function createUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required",
            });
        }

        const user = await userService.createUser(name, email);

        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function getUsers(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const users = await userService.getUsers();

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

async function getUserById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);

        const user = await userService.getUserById(id);

        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function updateUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);
        const { name, email } = req.body;

        const user = await userService.updateUser(id, name, email);

        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);

        await userService.deleteUser(id);

        return res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export {
    createUser, getUsers, getUserById, updateUser, deleteUser,
};