const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.querySelector(
    'input[placeholder="First Name"]'
  ).value;
  const lastName = document.querySelector(
    'input[placeholder="Last Name"]'
  ).value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const password = document.querySelector(
    'input[placeholder="Password"]'
  ).value;

  alert(
    `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}`
  );

  if (firstName && lastName && email && password) {
    console.log("Form is valid");
  } else {
    errorMessage.textContent = "Please fill out all fields.";
  }
});

const inputFields = document.querySelectorAll("input");
inputFields.forEach((field) => {
  field.addEventListener("input", () => {
    errorMessage.textContent = "";
  });
});
