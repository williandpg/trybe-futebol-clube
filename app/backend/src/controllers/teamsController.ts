import { Request, Response } from 'express';
import TeamsServices from '../services/teamsService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

class teamsController {
  constructor(
    private service: TeamsServices,
  ) {}

  public async getAllTeams(req: Request, res: Response) {
    const { data, status } = await this.service.getAllTeams();
    return res.status(mapHTTPstatus(status)).json(data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.service.getTeamById(Number(id));
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}

export default teamsController;
