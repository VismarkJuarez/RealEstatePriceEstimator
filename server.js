//jshint esversion:8

//adding all required dependencies/packages
const express = require('express');
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser'); //for parsing post requests
const request = require('request') //for making HTTP requests

//specifies that this app will be using express.
const app = express();

//middleware for processing POST requests a bit easier.
app.use(bodyParser.urlencoded({extended: false}));

//static AWS EC2 instance server port. Edit with caution.
const serverPort = 5001;

const FLASK_SERVER_LOCAL_ENDPOINT = "http://localhost:5000/predictPrice";

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
  res.sendFile(path.resolve("html/about_us.html"))
});

function parseRequestBody(reqBody) {
  var averageAreaIncome = parseInt(reqBody.averageAreaIncome, 10);
  var averageAreaNumberOfRooms = parseInt(reqBody.averageAreaNumberOfRooms, 10);
  var averageAreaHouseAge = parseInt(reqBody.averageAreaHouseAge, 10);
  var averageAreaNumberOfBedrooms = parseInt(reqBody.averageAreaNumberOfBedrooms, 10);
  var areaPopulation = parseInt(reqBody.areaPopulation, 10);

  var parsedRequestBody = {
    "averageAreaIncome": averageAreaIncome,
    "averageAreaNumberOfRooms": averageAreaNumberOfRooms,
    "averageAreaHouseAge": averageAreaHouseAge,
    "averageAreaNumberOfBedrooms": averageAreaNumberOfBedrooms,
    "areaPopulation": areaPopulation
  };

  return parsedRequestBody;
}

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
  /*
  console.log("received the following user input: \n");
  console.log(requestBody);
  postUserInputToFlaskServer(requestBody);
  */
});

function postUserInputToFlaskServer(userInput) {
  request.post(FLASK_SERVER_LOCAL_ENDPOINT, {
    json: userInput
  }, (error, res, body) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`statusCode: ${res.statusCode}`);
  console.log(body);
  });
}


//Start-up behaviour.
app.listen(serverPort, function() {
  console.log("You may access the server locally via: http://localhost:" + serverPort);
});
