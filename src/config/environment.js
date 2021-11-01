import config from 'dotenv';

const environment = {
  // Comparing true string because ENV does not provide bool values, only strings
  production: process.env.NODE_ENV === 'PROD',
  env: process.env.ENV || 'development',
  port: process.env.API_PORT || 4000,
  api_version: process.env.API_VERSION || '1.0.0',
  db_default: process.env.DB_DEFAULT || 'agenda',
  db_host: process.env.DB_HOST || 'localhost'
};
export default environment;
