var express = require('express');
var session = require('express-session');
var cookieParser  = require('cookie-parser');
var count = require('./routes/count');
var login = require('./routes/login');
var bodyParser = require('body-parser');
var MySQLStore = require('express-mysql-session')(session);

var app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var options = {
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '111111',
    database: 'o2'
};
 
var sessionStore = new MySQLStore(options);
 
app.use(session({
    secret: 'dwqe123e11231312312@#',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));


app.get('/count', count.count);
app.get('/auth/login', login.login);
app.post('/auth/login', login.loginpost)
app.get('/welcome', login.welcome);
app.get('/auth/logout', login.logout);

app.listen(3000, function(){
    console.log('Server is starting on Port: 3000');
})