import IMatches from '../Interfaces/IMatches';
import Match from '../database/models/MatchesModel';
import { ServiceResponse } from '../Interfaces/serviceResponse';

class MatchesService {
  constructor(
    private model = Match,
  ) {}

  public async findAll(): Promise<ServiceResponse<IMatches[]>> {
    const matchesAll = await this.model.findAll();
    return { status: 'SUCCESS', data: matchesAll };
  }

  public async findAllInProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>> {
    const matchesInProgress = await this.model.findAll();
    const matchesFilter = matchesInProgress.filter((match) => match.inProgress === inProgress);
    return { status: 'SUCCESS', data: matchesFilter };
  }
}

export default MatchesService;
