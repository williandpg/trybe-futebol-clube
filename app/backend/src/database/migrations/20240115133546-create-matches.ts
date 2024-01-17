import { Model, QueryInterface, DataTypes } from 'sequelize';

import IMatches from '../../Interfaces/IMatches';

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
     await queryInterface.createTable<Model<IMatches>>('matches', {
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
          references: {
            model: 'teams',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
          references: {
            model: 'teams',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.dropTable('matches');
  }
}
