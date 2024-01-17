import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

class LoginController {
  constructor(
    private service = new LoginService(),
  ) { }

  public async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    const response = await this.service.userLogin({ email, password });
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }

  public async roleUser(req: Request, res: Response) {
    const { email } = req.body.user;
    const response = await this.service.userRole(email);
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}

export default LoginController;
