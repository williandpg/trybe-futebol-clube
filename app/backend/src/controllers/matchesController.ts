import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

class MatchesController {
  constructor(
    private service = new MatchesService(),
  ) {}

  public async findAll(req: Request, res: Response) {
    const response = await this.service.findAll();
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }

  public async findByProgress(req: Request, res: Response) {
    const { progress } = req.query;
    const { data, status } = await this.service.findAllInProgress(progress === 'true');
    return res.status(mapHTTPstatus(status)).json(data);
  }
}

export default MatchesController;
