import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize/postgresql';
import { LinkCreationAttributes, LinkAttributes } from '../../types/models';
class Link extends Model<LinkAttributes, LinkCreationAttributes> {
  static associate(models: any) {
    Link.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  }
}
Link.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortCode: {
      type: DataTypes.STRING,
    },
    clicks: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: 'link' }
);
export default Link;
