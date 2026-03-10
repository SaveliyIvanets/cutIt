import { Sequelize } from 'sequelize';
import config from '../../config.json';
export default new Sequelize({
  host: config.host || 'localhost',
  port: config.port || 5432,
  database: config.database || 'projectx',
  username: config.username || 'postgres',
  password: config.password || 'postgres',
  dialect: 'postgres',
});
