import dotenv from 'dotenv';

dotenv.config();

const {
    JWT_SECRET: jwtSecret,
    DB_URI: db_uri
} = process.env;

export {jwtSecret, db_uri};