import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

export default class TeamsController {
  constructor(
    private teamsService: TeamsService = new TeamsService(),
  ) {}

  public async getAllTeams(_req: Request, res: Response) {
    const response = await this.teamsService.getAllTeams();
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.teamsService.getTeamById(Number(id));
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}
