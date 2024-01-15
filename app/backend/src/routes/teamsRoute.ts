import { Request, Response, Router } from 'express';
import TeamsController from '../controllers/teamsController';

const NewTeamsController = new TeamsController();

const router = Router();

router.get('/', (req: Request, res: Response) => NewTeamsController.getAllTeams(req, res));
router.get('/:id', (req: Request, res: Response) => NewTeamsController.getTeamById(req, res));

export default router;
