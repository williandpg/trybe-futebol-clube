import { ICRUD } from './ICRUD';

export default interface ITeams {
  id: number,
  teamName: string,
}

export type ITeamsCRUD = ICRUD<ITeams>;
