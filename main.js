const animalData = [
  {
    img: "turtle.jpg",
    animal: "Dori",
    info: "This is a turtle",
    about: "Iam everyone turtle!",
  },
  {
    img: "dolphin.jpg",
    animal: "Beth",
    info: "This is a dolphin",
    about: "Iam everyone dolphin!",
  },
  {
    img: "cat.jpg",
    animal: "Richardo",
    info: "This is a cat",
    about: " Iam everyone cat!",
  },
  {
    img: "swan.jpg",
    animal: "Soele",
    info: "This is a swan",
    about: " Iam everyone swan!",
  },
  {
    img: "bird.jpg",
    animal: "Birdo",
    info: "This is a bird",
    about: " Iam everyone bird!",
  },
  {
    img: "butterfly.jpg",
    animal: "Buttafurai",
    info: "This is a butterfly",
    about: " Iam everyone butterfly!",
  },
];

const img = document.querySelector("img");
const animal = document.querySelector(".animal");
const info = document.querySelector(".info");
const about = document.querySelector(".about");
const btn = document.querySelector(".btn");

let theItem = 0;

function setItem() {
  let item = animalData[theItem];
  img.src = item.img;
  animal.textContent = item.animal;
  info.textContent = item.info;
  about.textContent = item.about;
}

window.addEventListener("DOMContentLoaded", setItem());

btn.addEventListener("click", function () {
  theItem++;
  if (theItem > animalData.length - 1) {
    theItem = 0;
  }

  setItem(theItem);
});
