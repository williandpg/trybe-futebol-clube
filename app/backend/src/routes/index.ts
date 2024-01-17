import { Router } from 'express';
import teamsRouter from './teamsRoute';
import loginRouter from './loginRoute';
import matchesRouter from './matchesRoute';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);

export default router;
