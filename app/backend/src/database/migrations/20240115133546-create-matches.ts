import { Model, QueryInterface, DataTypes } from "sequelize";
import IMatches from '../../Interfaces/IMatches';

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable<Model<IMatches>>("matches", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      homeTeamId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      homeTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      awayTeamId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      awayTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable("matches");
  },
};