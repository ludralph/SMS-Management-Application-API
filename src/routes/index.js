const indexRouter = require('express').Router();
const contactsRouter = require('./contacts');

indexRouter.use('/contacts', contactsRouter);

module.exports = indexRouter;
