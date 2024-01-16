import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) { }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const response = await this.loginService.Login({ email, password });
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}

export default LoginController;
