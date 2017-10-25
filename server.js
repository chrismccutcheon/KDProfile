const express = require('express');
//const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Education');
require('./models/Experience');
require('./models/Volunteering');
require('./models/Other');
require('./services/passport'); // just to get this file to run

const resume = require('./routes/resume');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

console.log(keys.mongoURI);
mongoose.connect(keys.mongoURI);

var app = express();

app.use(
  cookieSession({
    maxAge: 30*24*60*60*100,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());


app.use('/', express.static(__dirname+'/client/build'));
app.use('/admin', express.static(__dirname+'/client/build'));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/resume', resume);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


module.exports = app;
