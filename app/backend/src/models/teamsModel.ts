// import Team from '../database/models/TeamsModel';
// import ITeam from '../Interfaces/ITeams';

// export default class TeamsModel {
//   private model = Team;

//   async findAll(): Promise<ITeam[]> {
//     const teams = await this.model.findAll();
//     return teams.map((team) => {
//       const { id, teamName } = team;
//       return { id, teamName };
//     });
//   }

//   async findById(id: number): Promise<ITeam> {
//     const team = await this.model.findByPk(id);
//     if (!team) throw new Error('Team not found');
//     const { teamName } = team;
//     return { id, teamName };
//   }
// }
