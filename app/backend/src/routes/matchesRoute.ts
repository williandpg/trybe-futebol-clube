import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matchesController';
import validToken from '../middlewares/validToken';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchesController.findAll(req, res));
router.patch('/:id/finish', validToken, (req, res) => matchesController.matchFinished(req, res));
router.patch('/:id', validToken, (req, res) => matchesController.matchUpdate(req, res));
router.post('/', validToken, (req, res) => matchesController.matchCreate(req, res));

export default router;
