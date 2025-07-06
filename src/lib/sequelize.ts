import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

const storagePath = process.env.DB_PATH || ':memory:';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: storagePath,
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
});

export default sequelize;

