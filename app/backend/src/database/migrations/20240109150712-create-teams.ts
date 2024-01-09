import { Model, QueryInterface, DataTypes } from 'sequelize';

import ITeams from '../../Interfaces/ITeams';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<ITeams>>('teams', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            teamName: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'team_name',
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('teams');
    },
};