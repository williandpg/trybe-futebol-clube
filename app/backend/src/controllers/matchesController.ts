import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

export default class MatchesController {
  constructor(
    private service = new MatchesService(),
  ) {}

  public async findAll(req: Request, res: Response) {
    const response = await this.service.findAll();
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}
