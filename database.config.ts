import * as dotenv from 'dotenv-flow';
dotenv.config();

export const config = {
  type: process.env.DB_TYPE as 'postgres', //irrelevant as long as you provide the right type in .env
  host: process.env.DB_HOST,
  port: -process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
