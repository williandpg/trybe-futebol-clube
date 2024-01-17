import { ICRUD } from './ICRUD';

export default interface IMatches {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

type TeamName = string | undefined;

export interface IMatchesCRUD extends IMatches {
  homeTeam: TeamName;
  awayTeam: TeamName;
}

export interface IMatchesInterface extends ICRUD<IMatches> {
  findAll(): Promise<IMatchesCRUD[]>;
}
