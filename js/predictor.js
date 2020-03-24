

var submitButton = document.getElementById("submitButton");
var predictionText = document.getElementById("predictionText");

submitButton.addEventListener("click", callPredictor);



function callPredictor() {

  var averageAreaIncome = document.getElementById('averageAreaIncome').value;
  var averageAreaNumberOfRooms = document.getElementById('averageAreaNumberOfRooms').value;
  var averageAreaHouseAge = document.getElementById('averageAreaHouseAge').value;
  var averageAreaNumberOfBedrooms = document.getElementById('averageAreaNumberOfBedrooms').value;
  var areaPopulation = document.getElementById('areaPopulation').value;

  console.log(averageAreaIncome);
  console.log(averageAreaNumberOfRooms);

  var userInputAsJSON = JSON.stringify({
    "averageAreaIncome": parseInt(averageAreaIncome, 10),
    "averageAreaNumberOfRooms": parseInt(averageAreaNumberOfRooms, 10),
    "averageAreaHouseAge": parseInt(averageAreaHouseAge, 10),
    "averageAreaNumberOfBedrooms": parseInt(averageAreaNumberOfBedrooms, 10),
    "areaPopulation": parseInt(areaPopulation, 10)
  });

  console.log('made it into the function!');
  console.log("sending the following payload: " + userInputAsJSON);

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

  xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            predictionText.innerHTML = this.responseText;
        }
    };

  var theUrl = "/json-handler";
  xmlhttp.open("POST", "http://localhost:5000/predictPrice");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  var responseBody = xmlhttp.send(userInputAsJSON);

}
