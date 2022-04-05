const img = document.querySelector("img");
const count = document.querySelector("p");

img.addEventListener("click", () => {
  count.innerText = +count.innerText + 1;
});
