import IMatches from '../Interfaces/IMatches';
import Match from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';
import { ServiceResponse } from '../Interfaces/serviceResponse';

class MatchesService {
  constructor(private model = Match, private teamsModel = TeamsModel) {}

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

  public async matchFinished(id: number): Promise<void> {
    await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  public async matchUpdate(id: number, match: Match): Promise<void> {
    await this.model.update(
      { homeTeamGoals: match.homeTeamGoals, awayTeamGoals: match.awayTeamGoals },
      { where: { id } },
    );
  }

  public async matchCreate(match: Match): Promise<Match> {
    try {
      if (match.homeTeamId === match.awayTeamId) {
        throw new Error('It is not possible to create a match with two equal teams');
      }
      const existsHomeTeam = await this.teamsModel.findByPk(match.homeTeamId);
      const existsAwayTeam = await this.teamsModel.findByPk(match.awayTeamId);
      if (!existsHomeTeam || !existsAwayTeam) {
        throw new Error('There is no team with such id!');
      }
      const createdMatch = await this.model.create({ ...match, inProgress: true });
      return createdMatch;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default MatchesService;
