const form = document.getElementById("signup");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "please enter a valid email address";

function showMessage(input, message, isValid) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector("small");

  if (isValid) {
    errorMessage.textContent = "";
    formControl.classList.remove("error");
    formControl.classList.add("success");
  } else {
    errorMessage.textContent = message;
    formControl.classList.add("error");
    formControl.classList.remove("success");
  }
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(input.value.trim());
  if (!isValid) {
    return showError(input, EMAIL_INVALID);
  }
  return showSuccess(input);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
  let emailValid = hasValue(form.elements["email"], EMAIL_REQUIRED);
  emailValid = validateEmail(form.elements["email"]);

  if (nameValid && emailValid) {
    // Form is valid, submit it
    form.submit();
  }
});
