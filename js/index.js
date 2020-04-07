var myButton = document.getElementById("myButton");

var averageAreaIncomeInput = document.getElementById('income');
var averageAreaNumberOfRoomsInput = document.getElementById('num_of_rooms');
var averageAreaHouseAgeInput = document.getElementById('age');
var averageAreaNumberOfBedroomsInput = document.getElementById('bedrooms');
var areaPopulationInput = document.getElementById('population');

var priceEstimateParagraph = document.getElementById('priceEstimate');

myButton.addEventListener("click", makeRequest);


function makeRequest() {
  var averageAreaIncome = parseInt(averageAreaIncomeInput.value, 10);
  var averageAreaNumberOfRooms = parseInt(averageAreaNumberOfRoomsInput.value, 10);
  var averageAreaHouseAge = parseInt(averageAreaHouseAgeInput.value, 10);
  var averageAreaNumberOfBedrooms = parseInt(averageAreaNumberOfBedroomsInput.value, 10);
  var areaPopulation = parseInt(areaPopulationInput.value, 10);

  console.log(averageAreaIncome);
  console.log(averageAreaNumberOfRooms);
  console.log(averageAreaHouseAge);
  console.log(averageAreaNumberOfBedrooms);
  console.log(areaPopulation);

  postUserInputToApi(averageAreaIncome, averageAreaNumberOfRooms,
    averageAreaHouseAge, averageAreaNumberOfBedrooms,
    areaPopulation);
}


function postUserInputToApi(averageAreaIncome, averageAreaNumberOfRooms,
  averageAreaHouseAge, averageAreaNumberOfBedrooms, areaPopulation) {

  var userInputAsJSON = JSON.stringify({
    "averageAreaIncome": averageAreaIncome,
    "averageAreaNumberOfRooms": averageAreaNumberOfRooms,
    "averageAreaHouseAge": averageAreaHouseAge,
    "averageAreaNumberOfBedrooms": averageAreaNumberOfBedrooms,
    "areaPopulation": areaPopulation
  });

  console.log("sending the following payload to the API: " + userInputAsJSON);

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

  xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //Extracting, formatting and outputting the resulting prediction.
          var usdFormattedPrediction = formatPredictionResponse(this.responseText);
          priceEstimateParagraph.innerHTML = usdFormattedPrediction;
        }
    };

  xmlhttp.open("POST", "http://localhost:5000/predictPrice");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  var responseBody = xmlhttp.send(userInputAsJSON);

  console.log("response body: " + responseBody);
}


/**
 * TODO: This logic is overly complicated --- needs to be simplified.
 * TODO: Add commas.
 *
 * [formatPredictionResponse description]
 * @param  {[type]} predictionJson [description]
 * @return {[type]}                [description]
 */
function formatPredictionResponse(predictionJson) {
  var predictionJsonWithoutMetadata = predictionJson.split(":");
  var predictionString = predictionJsonWithoutMetadata[1].split("}")[0];
  var splitPrediction = predictionString.split(".");
  var dollarValue = splitPrediction[0];
  var centValue = splitPrediction[1].substr(0,2); //up to two decimal places
  var predictionAsDollarAmount = "$" + dollarValue + "." + centValue;
  return predictionAsDollarAmount;
}
