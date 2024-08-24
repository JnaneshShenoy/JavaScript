var countries = [
  { id: 1, name: "India" },
  { id: 2, name: "China" },
  { id: 3, name: "Pakistan" },
  { id: 4, name: "UAE" },
  { id: 5, name: "Australia" },
];

function populateCountries() {
  var countrySelect = document.getElementById("country");
  for (var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.value = countries[i].id;
    option.text = countries[i].name;
    countrySelect.appendChild(option);
  }
}

function getStates(countryId) {
  const xhr = new XMLHttpRequest();
  const url = "states.json";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.responseText);
    let stateSelect = document.getElementById("state");
    stateSelect.innerHTML = "";
    var stateArray = data[countryId];
    for (let i = 0; i < stateArray.length; i++) {
      let option = document.createElement("option");
      option.value = stateArray[i];
      option.text = stateArray[i];
      stateSelect.appendChild(option);
    }
  };
  xhr.send();
}
populateCountries();
// document.getElementById("country")
// .addEventListener("change", function () {
//   getStates(this.value);
// });
