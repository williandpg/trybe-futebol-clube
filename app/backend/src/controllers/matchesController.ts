import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import mapHTTPstatus from '../utils/mapHTTPstatus';

class MatchesController {
  constructor(
    private service = new MatchesService(),
  ) {}

  public async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const response = await this.service.findAllInProgress(inProgress === 'true');
      return res.status(mapHTTPstatus(response.status)).json(response.data);
    }
    const response = await this.service.findAll();
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }

  public async matchUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const response = await this.service.updateMatch(
      String(id),
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }

  public async finishedUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.service.updateFinished(String(id));
    return res.status(mapHTTPstatus(response.status)).json(response.data);
  }
}

export default MatchesController;
