import IMatches from '../Interfaces/IMatches';
import Match from '../database/models/MatchesModel';
import { ServiceResponse } from '../Interfaces/serviceResponse';

export default class MatchesService {
  constructor(
    private model = Match,
  ) {}

  public async findAll(): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.model.findAll();
    return { status: 'SUCCESS', data: matches };
  }
}
