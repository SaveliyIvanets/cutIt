import { Optional } from 'sequelize';
export interface LinkAttributes {
  id: number;
  originalUrl: string;
  shortCode: string;
  clicks: number;
}
export interface LinkCreationAttributes extends Optional<LinkAttributes, 'id'> {}
