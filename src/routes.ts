import { Router } from "express";
import { userRouter } from "./user/userController"

const router = Router();

router.use('/user', userRouter);

export default router;
