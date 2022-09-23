const listBanner = document.querySelector(".list-banner");

const figure = document.createElement("figure");
const img = document.createElement("img");
const title = document.createElement("figcaption");

figure.classList.add("wrapper-banner")

img.src = "img/banner-4.png";
img.alt = "banner-4";
img.classList.add("banner");

title.textContent = "Filme do Pelé";
title.classList.add("caption")

figure.insertAdjacentElement("beforeend", img);
figure.insertAdjacentElement("beforeend", title);

listBanner.insertAdjacentElement("beforeend", figure);

