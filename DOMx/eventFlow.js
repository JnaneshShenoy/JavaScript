document.getElementById("child").addEventListener(
  "click",
  () => {
    alert("child button clicked");
  },
  { capture: true }
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    alert("parent button clicked");
  },
  { capture: true }
);

document.getElementById("gramps").addEventListener(
  "click",
  () => {
    alert("Gramps button clicked");
  },
  { capture: true }
);
