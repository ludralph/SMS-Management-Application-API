const { Router } = require('express');
const {
  retrieveAllContacts, createNewContact, updateExistingContact, removeContact, listContactMessages,
} = require('../controllers/contacts');
const { validateContactFields } = require('../validator/validate');

const contactsRouter = Router();

contactsRouter.route('/')
  .get(retrieveAllContacts)
  .post(validateContactFields, createNewContact);

contactsRouter.route('/:contactId/messages')
  .get(listContactMessages);

contactsRouter.route('/:contactId')
  .patch(validateContactFields, updateExistingContact)
  .delete(removeContact);

  
module.exports = contactsRouter;
