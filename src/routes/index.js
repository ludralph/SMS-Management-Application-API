const indexRouter = require('express').Router();
const contactsRouter = require('./contacts');
const smsRouter = require('./sms');

indexRouter.use('/contacts', contactsRouter);
indexRouter.use('/sms', smsRouter);

module.exports = indexRouter;
