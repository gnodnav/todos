var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//require api
var index = require('./routes/index');
var users = require('./routes/users');
var setupController = require('./api/controllers/setupController.js');
var todoController = require('./api/controllers/todoController.js');

//connect mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejs',{useMongoClient: true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//use middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/assets',express.static(__dirname + '/public'));
app.use('/bower',express.static(__dirname + '/bower_components'));
//routing
app.use('/', index);
app.use('/users', users);

//use api
setupController(app);
todoController(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
