import IMatches from '../Interfaces/IMatches';
import Match from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';
import { ServiceResponse } from '../Interfaces/serviceResponse';

class MatchesService {
  constructor(
    private model = Match,
  ) {}

  public async findAll(): Promise<ServiceResponse<IMatches[]>> {
    const matchesAll = await this.model.findAll({
      include: [
        {
          model: TeamsModel,
          foreignKey: 'homeTeamId',
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: TeamsModel,
          foreignKey: 'awayTeamId',
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return { status: 'SUCCESS', data: matchesAll };
  }

  public async findAllInProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>> {
    const matchesInProgress = await this.model.findAll({
      include: [
        {
          model: TeamsModel,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: TeamsModel,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    const matchesFilter = matchesInProgress.filter((match) => match.inProgress === inProgress);
    return { status: 'SUCCESS', data: matchesFilter };
  }

  public async updateMatch(id: string, homeTeamGoals: number, awayTeamGoals: number)
    : Promise<ServiceResponse<{ message: string }>> {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return { status: 'SUCCESS', data: { message: 'Match updated!' } };
  }

  public async updateFinished(id:string): Promise<ServiceResponse<{ message: string }>> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return { status: 'SUCCESS', data: { message: 'Finished' } };
  }
}

export default MatchesService;
