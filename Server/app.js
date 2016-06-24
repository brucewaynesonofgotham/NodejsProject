var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);
var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('port', config.get('port'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(app.router);
app.get('/', function (req, res, next) {
  res.render('mainPage');
});
app.get('/task1', function (req, res, next) {
  res.render('task1');
});
app.get('/task2', function (req, res, next) {
  res.render('task2');
});
app.use(express.static(path.join(__dirname, 'public')));


/*
 var routes = require('./routes');
 var user = require('./routes/user');




 // all environments



 // development only
 if ('development' == app.get('env')) {
 app.use(express.errorHandler());
 }

 app.get('/', routes.index);
 app.get('/users', user.list);
 */
http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});
