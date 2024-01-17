import { ILeaderboard } from '../Interfaces/ILeaderboard';
import Team from '../database/models/TeamsModel';
import Match from '../database/models/MatchesModel';

const teamsInclude = { include: [{ model: Team, as: 'homeTeam', attributes: ['teamName'] }] };
const sumPoints = (match: Match): number => {
  if (match.homeTeamGoals > match.awayTeamGoals) {
    return 3;
  }
  if (match.homeTeamGoals === match.awayTeamGoals) {
    return 1;
  }
  return 0;
};

class LeaderboardService {
  constructor(private matchModel = Match, private teamModel = Team) { }

  public async getLeaderboardMatches(): Promise<Match[]> {
    try {
      const leaderboardMatches = await this.matchModel.findAll(
        { where: { inProgress: false }, ...teamsInclude },
      );
      return leaderboardMatches;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private calculateStats = (team: Team, filterMatches: Match[]): ILeaderboard => {
    const sumProperty = (property: keyof Match) => filterMatches
      .reduce((sum, match) => sum + Number(match[property]), 0);
    const totalPoints = filterMatches.reduce((sum, match) => sum + sumPoints(match), 0);
    return {
      name: team.teamName,
      totalPoints,
      totalGames: filterMatches.length,
      totalVictories: filterMatches
        .reduce((sum, match) => sum + (sumPoints(match) === 3 ? 1 : 0), 0),
      totalDraws: filterMatches
        .reduce((sum, match) => sum + (sumPoints(match) === 1 ? 1 : 0), 0),
      totalLosses: filterMatches
        .reduce((sum, match) => sum + (sumPoints(match) === 0 ? 1 : 0), 0),
      goalsFavor: sumProperty('homeTeamGoals'),
      goalsOwn: sumProperty('awayTeamGoals'),
      goalsBalance: sumProperty('homeTeamGoals') - sumProperty('awayTeamGoals'),
      efficiency: ((totalPoints / (filterMatches.length * 3)) * 100).toFixed(2),
    };
  };

  public async getLeaderboardStats(): Promise<ILeaderboard[]> {
    const leaderboardMatches = await this.getLeaderboardMatches();
    const modelTeams = await this.teamModel.findAll();
    return modelTeams.map((team) => {
      const matchesFilter = leaderboardMatches.filter((match) => match.homeTeamId === team.id);
      return this.calculateStats(team, matchesFilter);
    }).sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }
      if (b.totalVictories !== a.totalVictories) {
        return b.totalVictories - a.totalVictories;
      }
      if (b.goalsBalance !== a.goalsBalance) {
        return b.goalsBalance - a.goalsBalance;
      }
      return b.goalsFavor - a.goalsFavor;
    });
  }
}

export default LeaderboardService;
