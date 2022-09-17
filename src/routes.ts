import { Router } from "express";
import { userRouter } from "./user/userController"
// function routes(app: Express) {
//   app.post("/signup", signup);
//   app.get("/me", verifyToken, getUserData);
//   app.post("/login", login);
// }

const router = Router();

router.use('/user', userRouter);


export default router;
