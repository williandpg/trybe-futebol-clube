import { ServiceResponse } from '../Interfaces/serviceResponse';
import ITeams from '../Interfaces/ITeams';
import TeamsModel from '../models/teamsModel';

export default class TeamsService {
  constructor(private teamsModel: TeamsModel = new TeamsModel()) {}

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.teamsModel.findAll();
    return { data: teams, status: 'SUCCESS' };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.teamsModel.findById(id);
    return { data: team, status: 'SUCCESS' };
  }
}
