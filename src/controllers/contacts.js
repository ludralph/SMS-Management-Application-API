const db = require('../../models');
console.lo
const retrieveAllContacts = async (req, res) => {
  try {
    const allContacts = await db.Contact.findAll();
    res.status(200).json({ status: 'success', message: 'View All Contacts', data: allContacts });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const listContactMessages = async (req, res) => {
  try {
    const { contactId } = req.params;

    const doesContactExist = await db.Contact.findByPk(contactId);
    if (!doesContactExist) {
      return res.status(404).json({ status: 'error', message: 'This contact does not exist' });
    }
    const getContactMessages = await db.Contact.findOne({
      include: {
        model: db.Sms,
        as: 'Messages',
        attributes: ['recipientId', 'message', 'status'],
      },
    });
    res.status(200).json({ status: 'success', message: 'Contact updated successfully', data: getContactMessages });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

const createNewContact = async (req, res, next) => {
  try {
    const contact = req.body;
    if (!contact) {
    // pass a 400 error to the error-handler
      const error = new Error('contact payload is required');
      error.status = 400;
      return next(error);
    }
    const doesContactExist = await db.Contact.findOne({
      where: {
        phone: contact.phone_number,
      },
    });
    if (doesContactExist) {
      return res.status(409).json({
        status: 'error',
        message: 'A contact with this phone number exist',
      });
    }
    const newContact = {
      name: contact.name,
      phone: contact.phone_number,
    };

    await db.Contact.create(newContact);
    return res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const updateExistingContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = req.body;

    const doesContactExist = await db.Contact.findByPk(contactId);
    if (!doesContactExist) {
      return res.status(404).json({ status: 'error', message: 'The contact with this id does not exist' });
    }
    const updatedContact = await db.Contact.update({
      name: contact.name,
      phone: contact.phone_number,
    }, {
      returning: true, where: { id: contactId },
    });
    res.status(200).json({ status: 'success', message: 'Contact updated successfully', data: updatedContact });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

const removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const doesContactExist = await db.Contact.findByPk(contactId);

    if (!doesContactExist) {
      return res.status(404).json({ status: 'error', message: 'This Contact Id does not exist' });
    } 

    await db.Contact.destroy({
      where: {
        id: contactId,
      },
    });
    res.status(202).json({ status: 'success', message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  retrieveAllContacts,
  createNewContact,
  updateExistingContact,
  removeContact,
  listContactMessages,
};
