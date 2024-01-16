import { ModelStatic } from 'sequelize';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import ITeams from '../Interfaces/ITeams';
import TeamsModel from '../database/models/TeamsModel';

class TeamsService {
  constructor(
    private teamsModel: ModelStatic<TeamsModel>,
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const newTeams = await this.teamsModel.findAll();
    return { status: 'SUCCESS', data: newTeams };
  }
}

export default TeamsService;
