import { Router } from 'express';
import teamsRouter from './teamsRoute';

const router = Router();

router.use('/teams', teamsRouter);

export default router;
