var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

//Routes
app.get("/?", function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "comingsoon.html"));
});

app.listen(PORT, function() {
    console.log("app listening on port " + PORT + "...");
});