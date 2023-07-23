import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

if (process.env.NODE_ENV !== 'production') dotenv.config();

export const config = {
  PORT: process.env.PORT || 5052,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  APP_ENV: process.env.APP_ENV || 'dev',

  DB_NAME: process.env.DB_NAME || 'test',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: Number(process.env.DB_PORT) || 3306,
  DB_DIALECT: (process.env.DB_DIALECT as Dialect) || ('mysql' as Dialect),
};
