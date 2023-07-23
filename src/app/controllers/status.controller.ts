import { Request, Response } from 'express';

export class StatusController {
  status(_req: Request, res: Response) {
    res.status(200).send();
  }
}
