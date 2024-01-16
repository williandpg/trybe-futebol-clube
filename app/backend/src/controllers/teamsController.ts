import { Request, Response } from 'express';
import TeamsServices from '../services/teamsService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

class teamsController {
  constructor(
    private teamsService: TeamsServices,
  ) {}

  public async getAllTeams(req: Request, res: Response) {
    const { data, status } = await this.teamsService.getAllTeams();
    res.status(mapHTTPstatus(status)).json(data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.teamsService.getTeamById(Number(id));
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}

export default teamsController;
