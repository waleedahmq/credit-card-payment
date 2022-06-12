require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'pug');
app.locals.moment = require('moment');

// configurations setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app', 'public')));

// bootstraping the different modules in app
require('./bootstrap').bootstrap(app);
const helper = require('./app/helpers');
const database = require('./config/database');
database.sequelize.sync();

const response = require('./app/helpers/response');
const render = require('./app/helpers/render');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (req.body.rest_call) {
    return response(res, true, err.message, null, 'INTERNAL_SERVER_ERROR');
  }
  render(res, 'error', true, err.message, null, 'INTERNAL_SERVER_ERROR');
});

// start listening on the said port
const port = helper.env('PORT', 3000);
if (require.main === module) {
  app.listen(port, function () {
    console.log(`Server started listening on ${port}`);
  });
}

module.exports = app;
