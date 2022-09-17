export class HttpError extends Error{
    status: number
    constructor(message: string, status: number){
     super(message)   
     this.status = status;
    }
};

export class BadRequest extends HttpError{
    constructor(message: string) {
        super(message, 400)
    }
};

export class NotFound extends HttpError{
    constructor(message: string) {
        super(message, 404)
    }
};

export class Unauthorized extends HttpError{
    constructor(message: string) {
        super(message, 401)
    }
};

export class InternalServerError extends HttpError{
    constructor(message: string) {
        super(message, 500)
    }
};
