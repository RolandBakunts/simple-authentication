import Joi from 'joi';
import { BadRequest } from '../errors'
export function validateUser(input: any) {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    })
    if (!schema.validate(input)) {
        throw new BadRequest('Wrong request input')
    };
    return true;
}

