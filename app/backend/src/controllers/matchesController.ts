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

  public async matchFinished(req: Request, res: Response) {
    await this.service.matchFinished(Number(req.params.id));
    return res.status(200).json({ message: 'Finished' });
  }

  public async matchUpdate(req: Request, res: Response) {
    await this.service.matchUpdate(Number(req.params.id), req.body);
    return res.status(200).json({ message: 'Match is updated!' });
  }

  public async matchCreate(req: Request, res: Response) {
    try {
      const matchCreated = await this.service.matchCreate(req.body);
      return res.status(201).json(matchCreated);
    } catch (error) {
      console.error(error);
      if ((error as Error)
        .message === 'It is not possible to create a match with two equal teams') {
        res.status(422).json({ message: (error as Error).message });
      } else {
        res.status(404).json({ message: (error as Error).message });
      }
    }
  }
}

export default MatchesController;
