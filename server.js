"use strict";

// module
const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const Memorystore = require('memorystore')(session);
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

const app = express();

/* session  */
let maxAge = 5*60*1000;
const sessionObj = {
    name: 'session-cookie',
    secure: true, // only https
    secret: process.env.COOKIE_SECRET, // salt
    resave: false, // not always saving
    saveUninitialized: true,
    store: new Memorystore({ checkperiod: maxAge }), // server session storage, expires
    cookie: {
        maxAge: maxAge,
        httpOnly: true,
        Secure: true
    }   // cookie for client
};

// routing
const home = require('./src/routes/home');

// app, setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
nunjucks.configure('./src/views', {
    express: app,
    watch: true
});

// use -> method to register middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(favicon(path.join(__dirname, 'src', 'public', 'favicon', 'clnqlogo.ico')));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session(sessionObj));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // troubleshoot url data not being properly recognized

app.use("/", home);


module.exports = app;