 const getAllContacts = async (req, res, next) => {
  try {
    const allContacts = ['Testing'];
    res.status(200).json({ status: 'success', message: 'View All Contacts', data: allContacts });
  }
  catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

module.exports = getAllContacts;
