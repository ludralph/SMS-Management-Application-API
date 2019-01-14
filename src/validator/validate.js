const { validate } = require('jsonschema');

const contactSchema = require('../schemas/contactSchema.json');
const smsSchema = require('../schemas/smsSchema.json');

const validateContactFields = (req, res, next) => {
  const payload = {};
  payload.data = req.body;
  const result = validate(payload, contactSchema);
  if (!result.valid) {
    return next(result.errors.map(error => error.stack));
  }
  next();
};

const validateSmsFields = (req, res, next) => {
  // check if the current request.body payload is a valid contact
  const payload = {};
  payload.data = req.body;
  const result = validate(payload, smsSchema);
  if (!result.valid) {
    // pass the validation errors to the error handler
    //  the "stack" key is generally the most useful
    return next(result.errors.map(error => error.stack));
  }
  next();
};

module.exports = {
  validateContactFields,
  validateSmsFields,
};
