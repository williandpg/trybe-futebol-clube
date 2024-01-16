import { Router } from 'express';
import teamsRouter from './teamsRoute';
import loginRouter from './loginRoute';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', loginRouter);

export default router;
