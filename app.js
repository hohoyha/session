var express = require('express');
var session = require('express-session');
var cookieParser  = require('cookie-parser');
var count = require('./routes/count');
var login = require('./routes/login');
var bodyParser = require('body-parser');
var FileStore = require('session-file-store')(session);
var uselist = require('./models/user');



var app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  secret: 'dwqe123e11231312312@#',
  resave: false,
  saveUninitialized: true,
  store: new FileStore() 
}));

app.get('/count', count.count);
app.get('/auth/login', login.login);
app.post('/auth/login', login.loginpost)
app.get('/welcome', login.welcome);
app.get('/auth/logout', login.logout);

app.get('/auth/register', login.register);
app.post('/auth/register', login.registerpost);

app.listen(3000, function(){
    console.log('Server is starting on Port: 3000');
})


