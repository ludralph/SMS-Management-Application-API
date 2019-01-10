const { Router } = require('express');
const retrieveAllContacts = require('../controllers/contacts');

const contactsRouter = Router();

contactsRouter.route('/')
  .get(retrieveAllContacts);


module.exports = contactsRouter;
