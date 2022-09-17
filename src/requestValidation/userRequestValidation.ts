import Joi from 'joi';
import { BadRequest } from '../errors'

// validate user input data
export function validateUser(input: string) {
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
    }).validate(input)
    if (schema.error) {
        throw new BadRequest('Wrong request input')
    };
    return;
}

