const express = require('express');
const app = express();
const session = require('express-session');

// DB Connection
require('./connection');

// Session
app.use(session({
    name: process.env.SES_NAME,
    secret: process.env.SES_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))

// Test control
const test = require('./controls/test');
app.use('/api', test);

// Controls
const register = require('./controls/register');
app.use('/api', register); 

const login = require('./controls/login');
app.use('/api', login);

const logout = require('./controls/logout');
app.use('/api', logout);

const userInfo = require('./controls/userInfo');
app.use('/api', userInfo);

const isAuthenticated = require('./controls/isAuthenticated');
app.use('/api', isAuthenticated);

app.listen('9090', () => console.log('Server is listening on port :9090'))