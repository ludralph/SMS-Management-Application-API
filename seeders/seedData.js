const db = require('../models');

const contacts = [
  {
    name: 'Raphael Etim',
    phone: '07031036892',
  },
  {
    name: 'Emem Etim',
    phone: '09023456789',
  },
  {
    name: 'Blessing Etim',
    phone: '08023456789',
  },
];

const insertSeedData = () => {
  db.Contact.bulkCreate(contacts);
};

module.exports = {
  insertSeedData,
  contacts,
};
