document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("data.json")
    .then((response) => response.json())
    .then((users) => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        localStorage.setItem("loggedinuser", user.username);
        document.getElementById("loginMessage").textContent =
          "Login successful!";
        alert("Login successful!");
        window.location.href = "services.html";
      } else {
        document.getElementById("loginMessage").textContent =
          "Invalid username or password.";
      }
    });
});

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneCountryCode = document.getElementById("phoneCountryCode").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const service = document.getElementById("service").value;
    const carModel = document.getElementById("carmodel").value;
    const fuelType = document.querySelector(
      'input[name="fuelType"]:checked'
    ).value;
    const date = document.getElementById("appointmentDate").value;
    const address = document.getElementById("address").value;

    const bookingDetails = {
      name,
      email,
      phoneCountryCode,
      phoneNumber,
      service,
      carModel,
      fuelType,
      date,
      address,
    };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    window.location.href = "bookingSuccess.html";
  });
