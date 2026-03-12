import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize/postgresql';
import { UserCreationAttributes, UserAttributes } from '../../types/models';
class User extends Model<UserAttributes, UserCreationAttributes> {
  static associate(models: any) {
    User.hasMany(models.Link, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  }
}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'user' }
);
export default User;
