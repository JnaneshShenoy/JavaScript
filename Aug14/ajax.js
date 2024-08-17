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

// function getData() {
//   alert("Alert to get data");
//   const xhr = new XMLHttpRequest();
//   const url = "http://127.0.0.1:5500/14-8-24/data.json";
//   xhr.open("GET", url);
//   xhr.onload = () => {
//     console.log("loaded with data");
//     console.log(typeof xhr.responseText);
//     let dataObj = JSON.parse(xhr.responseText);
//     console.log(dataObj);
//     for (let key in dataObj) {
//       let dl = document.createElement("dl");
//       let dt = document.createElement("dt");
//       dt.innerHTML = `${key}`;
//       let dd = document.createElement("dd");
//       dd.innerHTML = `${dataObj[key]}`;
//       dl.appendChild(dt);
//       dl.appendChild(dd);
//       document.getElementById("data").appendChild(dl);
//     }
//   };
//   xhr.send();
// }
