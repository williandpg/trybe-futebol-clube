import { ICRUD } from './ICRUD';

export default interface IMatches {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IMatchesCRUD extends IMatches {
  homeTeam: { teamName: string | undefined },
  awayTeam: { teamName: string | undefined },
}

export interface IMatchesModel extends ICRUD<IMatches> {
  findAll(): Promise<IMatchesCRUD[]>;
}
