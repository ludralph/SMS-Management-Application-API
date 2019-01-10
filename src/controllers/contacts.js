 const retrieveAllContacts = async (req, res) => {
  try {
    const allContacts = ['Testing'];
    res.status(200).json({ status: 'success', message: 'View All Contacts', data: allContacts });
  }
  catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

const createNewContact = (req, res, next) => {
  
  const contact = req.body;

  if (!contact) {
    // pass a 400 error to the error-handler
    const error = new Error('contact payload is required');
    error.status = 400;
    return next(error);
  }
  /* 
    (not implemented) insert the book into the database here
  */

  return res.status(201).json(contact)
}

const updateExistingContact = (req,res, next) => {
  const contact = {
    name: 'updated',
  }
  return res.status(200).json(contact)
};

const removeContact = (req,res, next ) => {
  const contact = {
    name: 'deleted',
  }
  return res.status(200).json(contact)
}

module.exports = {
  retrieveAllContacts,
  createNewContact,
  updateExistingContact,
  removeContact,
};
