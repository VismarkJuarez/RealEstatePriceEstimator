//jshint esversion:8

//adding all required dependencies/packages
const express = require('express');

//specifies that this app will be using express.
const app = express();

//static AWS EC2 instance server port. Edit with caution.
const serverPort = 5001;

//Handle all root requests.
app.get("/", function(req, res) {
  res.send("Hello!");
});

//Start-up behaviour.
app.listen(serverPort, function() {
  console.log("You may access the server locally via: http://localhost:" + serverPort);
});
