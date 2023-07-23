import { Router } from 'express';

import { StatusController } from '../controllers';

type StatusRoutesIoC = {
  StatusController: StatusController;
};

export default function ({ StatusController }: StatusRoutesIoC) {
  const router = Router();

  router.get('', StatusController.status);

  return router;
}
