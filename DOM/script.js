let btnx = document.getElementById("submit");
let output = document.getElementById("output");
let ratings = document.getElementsByName("rating");

btnx.addEventListener("click", () => {
  let selectedRating;
  ratings.forEach((rating) => {
    if (rating.checked) {
      selectedRating = rating.value;
    }
  });

  if (selectedRating) {
    output.innerHTML = "Thank you for rating our service: " + selectedRating;
    console.log(selectedRating);
  } else {
    output.innerHTML = "Please select a rating.";
    console.log("No rating selected !!")
  }
});
