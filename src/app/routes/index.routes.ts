import express from 'express';

type AppRouterIoC = {
  StatusRoutes: express.Router;
};

export default function ({ StatusRoutes }: AppRouterIoC) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes.use('/status', StatusRoutes);

  router.use('/v1/api', apiRoutes);

  return router;
}
