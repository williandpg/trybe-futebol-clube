import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matchesController';
import validToken from '../middlewares/validToken';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchesController.findAll(req, res));
router.patch(
  '/:id/finish',
  validToken,
  (req: Request, res: Response) => matchesController.finishedUpdate(req, res),
);
router.patch(
  '/:id',
  validToken,
  (req:Request, res: Response) => matchesController.matchUpdate(req, res),
);
router.post(
  '/:id',
  validToken,
  (req: Request, res: Response) => matchesController.matchUpdate(req, res),
);

export default router;
