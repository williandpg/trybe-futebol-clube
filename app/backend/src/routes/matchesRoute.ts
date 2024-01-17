import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (inProgress === undefined) {
    matchesController.findAll(req, res);
  } else {
    matchesController.findByProgress(req, res);
  }
});

export default router;
