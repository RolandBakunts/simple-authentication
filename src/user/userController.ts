import { Request, Response, NextFunction, Router } from "express";
import verifyToken from "../middleware/authorization";
import * as UserService from './userService'

export const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.get("/", verifyToken, getUserData);
userRouter.post("/login", login);

export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body;
        const user = await UserService.signup({password, username})
        return res.status(201).send(user);
    } catch (error) {
        next(error);
    }
};

export async function getUserData(req: Request, res: Response, next: NextFunction) {
    try {
        const { username } = req.body;
        const user = await UserService.getUser(username)
        return res.status(201).send(user);
    } catch (error) {
        next(error);
    }
};

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body;
        const token = await UserService.login({username, password});
        res.header("auth-token", token).send(token);
    } catch (error) {
        next(error);
    }
};
