import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connection = new Sequelize(
  process.env.DB_URL,
  // 'postgres://proj3db_user:ETM5MJ1V0z18pYI0otMQvMN5pZHzt8qU@dpg-c9sq07b0tnujvo4ktdg0-a.oregon-postgres.render.com/proj3db',
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
