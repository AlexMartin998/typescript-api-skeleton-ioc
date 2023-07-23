import { Sequelize } from 'sequelize';

import { config } from '.';

export const db = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    port: config.DB_PORT,
    define: { timestamps: true, underscored: true },
    logging: false,
  }
);

export const dbConnection = async () => {
  try {
    await db.authenticate();
    // await db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};
