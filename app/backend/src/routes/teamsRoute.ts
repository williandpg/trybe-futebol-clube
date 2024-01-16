import { Request, Router, Response } from 'express';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';
import TeamsModel from '../database/models/TeamsModel';

const service = new TeamsService(TeamsModel);
const teamsController = new TeamsController(service);

const router = Router();

router.get('/', (req: Request, res: Response) => teamsController.getAllTeams(req, res));

export default router;
