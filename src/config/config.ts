import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const dbDetails = {
  host: process.env.LOCAL_HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT
};

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: dbDetails.host,
  port: Number(dbDetails.port),
  username: dbDetails.user,
  password: dbDetails.password,
  database: dbDetails.database
};

const config = {
  port: process.env.PORT,
  dbDetails: dbDetails,
  jwt_secret: process.env.JWT_SECRET,
  database_url: process.env.DATABASE_URL,
  ormconfig: ormconfig
};

export default config;
