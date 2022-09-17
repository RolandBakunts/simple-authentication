import { Request, Response, NextFunction, Router } from "express";
import verifyToken from "../middleware/authorization";
import { validateUser } from "../requestValidation/userRequestValidation";
import * as UserService from './userService'

// routes
export const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.get("/", verifyToken, getUserData);
userRouter.post("/login", login);

// user signup
export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        validateUser(req.body);
        const { username, password } = req.body;
        const user = await UserService.signup({ password, username })
        return res.status(201).send(user);
    } catch (error) {
        next(error);
    }
};

// get own data
export async function getUserData(req: Request, res: Response, next: NextFunction) {
    try {
        const { username } = req.body;
        const user = await UserService.getUser(username)
        return res.status(201).send(user);
    } catch (error) {
        next(error);
    }
};

// user login
export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        validateUser(req.body);
        const { username, password } = req.body;
        const token = await UserService.login({username, password});
        res.header("auth-token", token).send(token);
    } catch (error) {
        next(error);
    }
};
