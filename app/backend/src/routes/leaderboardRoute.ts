import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardController = new LeaderboardController();
const router = Router();

router.get('/', (req: Request, res: Response) => leaderboardController.getHomeMatches(req, res));

router.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getHomeLeaderboard(req, res),
);

export default router;
