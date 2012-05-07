var express = require('express')
  , _ = require('underscore')
  , app = express.createServer()

// Express config
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.cookieParser());
app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var DEFAULT_PORT = 10000;

// App

app.get('/', function(req, res) {
  res.render('index', {

  });
});

var port = process.env.PORT || DEFAULT_PORT;
app.listen(port);

console.log('Started listening on port ' + port);
