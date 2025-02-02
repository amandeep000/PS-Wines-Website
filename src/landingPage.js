// rotating text section
const text = document.querySelector(".rotating-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.6}deg)">${char}</span>`
  )
  .join("");

// responsive menu

const menu = document.querySelectorAll("#hamMenu");
const main = document.querySelector("#main-content");
console.log(menu);
menu.forEach((item) =>
  item.addEventListener("click", () => main.classList.toggle("active"))
);
// menu.addEventListener("click", () => {
//   main.classList.toggle("active");
// });
