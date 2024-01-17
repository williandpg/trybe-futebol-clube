import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  constructor(private service = new LeaderboardService()) {}

  public async getHomeLeaderboard(req: Request, res: Response) {
    try {
      const response = await this.service.getLeaderboardStats();
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  public async getHomeMatches(req: Request, res: Response) {
    try {
      const response = await this.service.getLeaderboardMatches;
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default LeaderboardController;
