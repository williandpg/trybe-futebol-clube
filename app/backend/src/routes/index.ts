import { Router } from 'express';
import teamsRouter from './teamsRoute';
import loginRouter from './loginRoute';
import matchesRouter from './matchesRoute';
import leaderboardRouter from './leaderboardRoute';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
