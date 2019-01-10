// import the validator class
const { validate } = require('jsonschema');

// require the book schema (a JSON file that we generated on jsonschema.net)
const contactSchema = require('../schemas/contactSchema.json');

const validateFields = (req, res, next) => {
  // check if the current request.body payload is a valid contact
  const payload = {};
  payload.data = req.body;
  const result = validate(payload, contactSchema);
  if (!result.valid) {
    // pass the validation errors to the error handler
    //  the "stack" key is generally the most useful
    return next(result.errors.map(error => error.stack));
  }
  next();
};

module.exports = validateFields;
