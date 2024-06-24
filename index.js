import { Sequelize} from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
 
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'Task manager',
  user: 'myuser',
  password: 'OkmOkmNikola77>:',
  host: 'localhost',
  port: 5432,
  ssl: true,
  clientMinMessages: 'notice',
});


exports = sequelize;