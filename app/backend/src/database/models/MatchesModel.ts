import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

export default class Match extends
  Model<InferAttributes<Match>, InferCreationAttributes<Match>> {
  public id!: number;

  public homeTeamId!: number;

  public homeTeamGoals!: number;

  public awayTeamId!: number;

  public awayTeamGoals!: number;

  public inProgress!: boolean;
}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team_id',
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team_goals',
    },
    awayTeamId: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize: db,
    modelName: 'Match',
    tableName: 'matches',
    timestamps: false,
    underscored: true,
  },
);
