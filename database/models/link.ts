import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize/postgresql';
class Link extends Model {}
Link.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  { sequelize, modelName: 'link' }
);
