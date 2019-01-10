const { Router } = require('express');
const { retrieveAllContacts, createNewContact, updateExistingContact, removeContact } = require('../controllers/contacts');
const validateFields = require('../validator/validate');

const contactsRouter = Router();

contactsRouter.route('/')
  .get(retrieveAllContacts)
  .post(validateFields, createNewContact);

contactsRouter.route('/:contactId')
  .patch(validateFields, updateExistingContact)
  .delete(removeContact);



module.exports = contactsRouter;
