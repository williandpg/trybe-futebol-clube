import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable("matches", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      home_team_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      away_team_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      home_team_goals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      away_team_goals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      in_progress: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.dropTable("matches");
  },
};