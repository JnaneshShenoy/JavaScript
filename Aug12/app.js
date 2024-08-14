const form = document.getElementById("signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a valid email address";

function validateInput(input, message, regex = /.*/) {
  if (input.value.trim() === "" || !regex.test(input.value)) {
    input.classList.add("error");
    input.nextElementSibling.innerText = message;
  } else {
    input.classList.remove("error");
    input.nextElementSibling.innerText = "";
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameInput = form.elements["name"];
  const emailInput = form.elements["email"];

  validateInput(nameInput, NAME_REQUIRED);
  validateInput(emailInput, EMAIL_REQUIRED, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  if (!nameInput.classList.contains("error") && !emailInput.classList.contains("error")) {
    console.log("Form is valid");
  }
});