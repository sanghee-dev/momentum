const clockContainer = document.querySelector(".js-clock"),
  clockTime = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTime.innerHTML = `
  ${hours < 10 ? `0${hours}` : hours} :
  ${minutes < 10? `0${minutes}` : minutes} :
  ${seconds < 10? `0${seconds}` : seconds}
  `
};

function init() {
  setInterval(getTime, 1000)
  getTime();
}

init();
