function getData() {
  alert("Clicked Button");
  const xhr = new XMLHttpRequest();
  const url =
    "https://raw.githubusercontent.com/JnaneshShenoy/JavaScript/main/Aug14/data.json";

  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);

      // Displaying the data in the div
      const dataDiv = document.getElementById("data");
      dataDiv.innerHTML = ""; // Clear previous content

      for (const region in data) {
        const regionTitle = document.createElement("h2");
        regionTitle.textContent = region;
        dataDiv.appendChild(regionTitle);

        const ul = document.createElement("ul");
        data[region].forEach((place) => {
          const li = document.createElement("li");
          li.textContent = place;
          ul.appendChild(li);
        });
        dataDiv.appendChild(ul);
      }
    }
  };
  xhr.send();
}
