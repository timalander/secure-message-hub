var express = require("express");
var routes = require('./routes/routes');
var app = express();

//static content and body parser
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));
app.use(express.bodyParser());

//get requests
app.get('/', function(req, res) {
  res.sendfile('public/register.html');
});

app.get('/send', function(req, res) {
  res.sendfile('public/send.html');
});

app.get('/receive', function(req, res) {
  res.sendfile('public/receive.html');
});

app.get('/register', function(req, res) {
  res.sendfile('public/register.html');
});

//post requests
app.post('/register', routes.register);
app.post('/send', routes.send);
app.post('/getmessages', routes.getmessages);
app.post('/getmessage', routes.getmessage);
app.post('/pubkey', routes.pubkey);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
