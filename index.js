const express = require("express");
var app = express();
//const and let is pretty much the same as var.
//const is constant you cant change it anymore either value or name.
//let you can change it but you can't reuse that name for other purposes
//var can be reused over and over


const port = process.env.PORT || 3000;


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//in terminal, type:
//cd myapp
//npm init
//node index.js
//open in browser localhost:3000


app.get("/awesome", function(req,resp){
    resp.end("YOU ARE AWESOME");
});
//now you can do localhost:3000/awesome


var names = [];
app.get("/name/:myname", function(req, resp){
   var myname = req.params.myname;
    names.push(myname);
    
    resp.send(names);
});


app.listen(port, function(err){
    if(err){
        console.log("GAME OVER: "+err);
        return false;
    }
    
    console.log("PORT IS OPENED FOR H@X!");
});