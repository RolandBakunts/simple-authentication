import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtSecret } from "../config";

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

async function verifyToken(req: Request, res: Response, next: NextFunction) {

  try {
    const token = <string>req.header("auth-token");
    if (!token) {
      res.status(401).send("Access denied");
    }

    const verified = jwt.verify(token, jwtSecret!);
    (req as CustomRequest).token = verified;

    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
}

export default verifyToken;
