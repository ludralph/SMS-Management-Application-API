const { Router } = require('express');
const {
  listAllMessages, createMessage } = require('../controllers/sms');
const { validateSmsFields } = require('../validator/validate');

const smsRouter = Router();

smsRouter.route('/create')
  .get(listAllMessages)
  .post(validateSmsFields, createMessage);

module.exports = smsRouter;
