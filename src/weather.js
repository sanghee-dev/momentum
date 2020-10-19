function saveCoords(coordsObj) {
  console.log(coordsObj);
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  loadedCoords = localStorage.getItem("coords");
  if (loadedCoords) {
    // getWeather
  } else {
    askForCoords();
  }
}

function init() {
  loadCoords();
}

init();
