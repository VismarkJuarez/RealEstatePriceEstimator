var myButton = document.getElementById("myButton");
var averageAreaIncomeInput = document.getElementById('income');
var averageAreaNumberOfRoomsInput = document.getElementById('num_of_rooms');
var averageAreaHouseAgeInput = document.getElementById('age');
var averageAreaNumberOfBedroomsInput = document.getElementById('bedrooms');
var areaPopulationInput = document.getElementById('population');

myButton.addEventListener("click", makeRequest);

function makeRequest() {
  var averageAreaIncome = averageAreaIncomeInput.value;
  var averageAreaNumberOfRooms = averageAreaNumberOfRoomsInput.value;
  var averageAreaHouseAge = averageAreaHouseAgeInput.value;
  var averageAreaNumberOfBedrooms = averageAreaNumberOfBedroomsInput.value;
  var areaPopulation = areaPopulationInput.value;

  console.log(averageAreaIncome);
  console.log(averageAreaNumberOfRooms);
  console.log(averageAreaHouseAge);
  console.log(averageAreaNumberOfBedrooms);
  console.log(areaPopulation);
  console.log("sent, bruh.");
}
