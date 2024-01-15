import {
  Model,
  DataTypes,
  InferAttributes,
} from 'sequelize';
import db from '.';

export default class User extends Model<InferAttributes<User>, InferAttributes<User>> {
  declare id: number;

  declare username: string;

  declare role: string;

  declare email: string;

  declare password: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: false,
});
