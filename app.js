var app = require("./expressServer.js");
var hosts = require("./hosts.js");
var passport = require("passport");
var localStrategy = require("passport-local");
var passportMongoose = require("passport-local-mongoose");

const host = hosts.host;
const port = hosts.port;

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/secret",function(req,res){
    res.render("secret.ejs");
});

app.listen(port,host,function(){
    console.log("secretSite \n listening on port " + port);
});

