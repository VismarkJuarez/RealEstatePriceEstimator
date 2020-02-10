//jshint esversion:8

//adding all required dependencies/packages
const express = require('express');
const path = require('path');
const fs = require("fs");

//specifies that this app will be using express.
const app = express();

//static AWS EC2 instance server port. Edit with caution.
const serverPort = 5001;

//Allow the use of static files in project directory
app.use('/js', express.static(__dirname + '/js'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/resources', express.static(__dirname + '/resources'));


//Handle all root requests.
app.get("/", function(req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.get("/index", function(req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.get("/predictor", function(req, res) {
  res.sendFile(path.resolve("html/predictor.html"));
});

app.get("/how_it_works", function(req, res) {
  res.sendFile(path.resolve("html/how_it_works.html"));
});

app.get("/about_us", function(req, res) {
  res.sendFile(path.resolve("html/about_us.html"));
});







//Start-up behaviour.
app.listen(serverPort, function() {
  console.log("You may access the server locally via: http://localhost:" + serverPort);
});
