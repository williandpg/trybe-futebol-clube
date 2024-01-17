import { Router, Request, Response } from 'express';
import LoginController from '../controllers/loginController';
import validLogin from '../middlewares/validLogin';
import validToken from '../middlewares/validToken';

const loginController = new LoginController();

const router = Router();

router.post('/', validLogin, (req: Request, res: Response) => loginController.loginUser(req, res));
router.get(
  '/role',
  validToken,
  (req: Request, res: Response) => loginController.roleUser(req, res),
);

export default router;
