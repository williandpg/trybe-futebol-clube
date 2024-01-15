import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Matches extends Model {
  public id!: number;

  public homeTeamId!: string;

  public awayTeamId!: string;

  public homeTeamGoals!: number;

  public awayTeamGoals!: number;

  public inProgress!: boolean;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'home_team_id',
  },
  awayTeamId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'away_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'Matches',
  tableName: 'matches',
  underscored: true,
  timestamps: false,
});
