import { Optional } from 'sequelize';
export interface UserAttributes {
  id: number;
  username: string;
  passwordHash: number;
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
