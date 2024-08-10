let btn = document.getElementById("btn");
let count = 0
btn.addEventListener("click", () => {
   count += 1
   const p = document.getElementById('p')
   p.innerHTML = `Button clicks : ${count}`
});

let rst = document.getElementById('rst')
rst.addEventListener("click", () => {
   count = 0
   const p = document.getElementById('p')
   p.innerHTML = `Button clicks : ${count}`
})