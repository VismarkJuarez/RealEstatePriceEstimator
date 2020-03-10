//jshint esversion:8

//adding all required dependencies/packages
const express = require('express');
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser'); //for parsing post requests

//specifies that this app will be using express.
const app = express();

//middleware for processing POST requests a bit easier.
app.use(bodyParser.urlencoded({extended: false}));

//static AWS EC2 instance server port. Edit with caution.
const serverPort = 5001;

//Allow the use of static files in project directory
app.use('/js', express.static(__dirname + '/js'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/resources', express.static(__dirname + '/resources'));

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


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

});

/**
 * This endpoint will be invoked when the `predictorUserInputSection`
 * form (in the `predictor.html` file) is submitted.
 *
 * The function will then submit an HTTP POST request to the Python
 * Flask server, with the user's input as the request body, to process
 * the user input.
 *
 * @param  httpRequest req request from the form.
 * @param  response res The response to be returned from this function.
 * @return HTTP status     The status of the executed HTTP POST request.
 */
app.post("/post_data_to_predictor_algorithm", (req, res) => {
  var requestBody = req.body;
  console.log("received the following payload for POSTing to the Flask server: \n");
  console.log(requestBody);
  res.send("THANK YOU");
});


//Start-up behaviour.
app.listen(serverPort, function() {
  console.log("You may access the server locally via: http://localhost:" + serverPort);
});
