const logger = require('logger').createLogger();
const app = require('./app');
const db = require('../models')


const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    logger.log(`Server started on port ${PORT}`);
  });
});
