import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

export default class Matches extends
  Model<InferAttributes<Matches>, InferCreationAttributes<Matches>> {
  declare id: number;

  declare homeTeamId: string;

  declare homeTeamGoals: number;

  declare awayTeamId: string;

  declare awayTeamGoals: number;

  declare inProgress: boolean;
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
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'away_team_id',
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
