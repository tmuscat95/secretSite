var express = require("express");
var passport = require("passport");
var bodyParser = require("body-parser");
var expressSession = require("express-session");
var User = require("./models/user.js");

var app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded([{extended:true}]));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(expressSession({
    secret: "mysecret",
    resave:false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())
module.exports = app;