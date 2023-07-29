/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { Error as SequelizeError } from 'sequelize';

import { Logger } from '../../utils';

const errorMessages = new Map([
  [
    SequelizeError,
    {
      status: 500,
      message: 'Record could not be saved',
    },
  ],
]);

export default (err: any, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = errorMessages.get(err.constructor) || {
    status: 500,
    message: 'Something went wrong',
  };

  Logger.error(err);

  return res.status(status).send({
    status,
    message,
  });
};
