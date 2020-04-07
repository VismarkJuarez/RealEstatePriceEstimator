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

  postUserInputToApi(averageAreaIncome, averageAreaNumberOfRooms,
    averageAreaHouseAge, averageAreaNumberOfBedrooms,
    areaPopulation);

  console.log("sent, bruh.");
}

function postUserInputToApi(averageAreaIncome, averageAreaNumberOfRooms,
  averageAreaHouseAge, averageAreaNumberOfBedrooms, areaPopulation) {

  let payload = {
    averageAreaIncome: averageAreaIncome,
    averageAreaNumberOfRooms: averageAreaNumberOfRooms,
    averageAreaHouseAge: averageAreaHouseAge,
    averageAreaNumberOfBedrooms: averageAreaNumberOfBedrooms,
    areaPopulation: areaPopulation
  };

  let response = fetch('http://localhost:5000/predictPrice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'

    },
    body: JSON.stringify(payload)
  });

  let result = response.json();
  alert(result.message);
}
