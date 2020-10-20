const body = document.querySelector("body"),
  pantone = document.querySelector(".js-background-pantone"),
  pantoneWeather = document.querySelector(".js-weather-pantone");

const IMG_NUMBER = 5;

function paintImage(imgnumber) {
  const image = new Image();
  image.src = `images/${imgnumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  switch (imgnumber) {
    case 0:
      pantone.innerHTML = "PANTONE® 2016<br />Rose Quartz & Serenity";
      pantone.style.color = "rgb(245, 201, 201)";
      pantoneWeather.style.color = "rgb(145,166,207)";
      break;
    case 1:
      pantone.innerHTML = "PANTONE® 2017<br />Greenery";
      break;
    case 2:
      pantone.innerHTML = "PANTONE® 2018<br />Ultra Violet";
      break;
    case 3:
      pantone.innerHTML = "PANTONE® 2019<br />Living Coral";
      break;
    case 4:
      pantone.innerHTML = "PANTONE® 2020<br />Classic Blue";
      break;
  }
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
