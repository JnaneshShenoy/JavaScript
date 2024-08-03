function test() {
  const message = document.getElementById("p1");
  message.innerHTML = "";
  let x = document.getElementById("num").value;
  try {
    if (x == "") {
      throw "empty input";
    }
    if (isNaN(x)) {
      throw "not a number";
    }
    x = Number(x);
    if (x > 10 || x < 5) {
      throw "ERROR !!";
    } else {
      message.innerHTML = "valid input :" + x;
    }
  } catch {
    message.innerHTML = "invalid input";
  } finally {
    document.getElementById("num").value = "";
  }
}
