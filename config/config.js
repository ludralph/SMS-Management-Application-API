const dotenv = require('dotenv');

dotenv.config();

const config = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: process.env.PRODUCTION_DATABASE_URL,
    use_env_variable: process.env.PRODUCTION_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    }
  }
};

module.exports = config;