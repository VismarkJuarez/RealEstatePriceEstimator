//jshint esversion:8

//adding all required dependencies/packages
const express = require('express');

//specifies that this app will be using express.
const app = express();

//static AWS EC2 instance server port. Edit with caution.
const serverPort = 5000;

//Handle all root requests.
app.get("/", function(req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.get("/userSuccessfullySubscribed", function(req, res) {
  res.sendFile(path.resolve("html/subscriberAddedSuccessfully.html"));
});

app.get("/userSuccessfullyRemoved", function(req, res) {
  res.sendFile(path.resolve("html/subscriberRemovedSuccessfully.html"));
});

//Start-up behaviour.
app.listen(serverPort, function() {
  console.log("Server started on AWS EC2 instance: " + awsEc2InstanceBaseUrl);
  console.log("You may access the server locally via: http://localhost:" + serverPort);
});
