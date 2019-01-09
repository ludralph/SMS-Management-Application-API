const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  const welcomeMessage = `Welcome to the SMS Management API. Please use
  Postman to test out the routes. Thank you
  `;
  res.status(200).json({
    message: welcomeMessage,
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// error handlers
app.use((err, req, res) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

module.exports = app;
