import { Response, Request, NextFunction } from 'express';
import { HttpError } from '../errors'

export function ErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error.message);
    if (error && error instanceof HttpError) {
        return res.status(error.status).send(error.message);
    }
    return res.status(500).send({msg:'internal error'})
}
