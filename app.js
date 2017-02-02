var express = require('express');
var session = require('express-session');
var cookieParser  = require('cookie-parser');
var count = require('./routes/count');

var app = express();
app.use(cookieParser());

app.use(session({
  secret: 'dwqe123e11231312312@#',
  resave: false,
  saveUninitialized: true
}));

app.get('/count', count.count);

app.listen(3000, function(){
    console.log('Server is starting on Port: 3000');
})