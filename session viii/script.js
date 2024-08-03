function divideNumbers() {
  let dividend = 123;
  let divisor = 10;
  try {
    if (divisor === 0) {
      throw new Error("Division by zero is not allowed");
    }
    const result = dividend / divisor;
    document.getElementById("pgm1").innerHTML += `<br>Division of ${dividend} by ${divisor} = ${result}`;
  } catch (error) {
    document.getElementById(
      "pgm1"
    ).innerHTML += `<br><span class="error">${error.message}</span><br>`;
  } finally {
    document.getElementById("pgm1").innerHTML += "<br>Program ended";
  }
}