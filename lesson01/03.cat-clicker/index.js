document.body.onload = () => {
  const content = document.getElementById("content");
  const reandomCatImageUrl = "https://source.unsplash.com/random/300x300/?cat";
  const img = document.createElement("img");
  img.src = reandomCatImageUrl;
  content.appendChild(img);

  const count = document.createElement("p");
  count.innerText = "0";
  content.appendChild(count);

  const catImg = document.querySelector("img");
  catImg.addEventListener("click", (e) => {
    count.innerText = Number(count.innerText) + 1;
  });
};
