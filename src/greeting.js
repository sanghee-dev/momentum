const form = document.querySelector(".js-greetings-form"),
  input = document.querySelector(".js-greetings-input"),
  greeting = document.querySelector(".js-greetings-greeting");

// currentUser O
function paintGreeting(currentUser) {
  form.classList.remove("showing");
  greeting.classList.add("showing");

  const date = new Date();
  const hours = date.getHours();

  if (6 <= hours >= 6 && hours < 12) {
    greeting.innerHTML = `Good morning, ${currentUser}.`;
  } else if (12 <= hours && hours < 18) {
    greeting.innerHTML = `Good afternoon, ${currentUser}.`;
  } else {
    greeting.innerHTML = `Good evening, ${currentUser}.`;
  }
}

// X -- > submit --> set
function handlesubmit(event) {
  event.preventDefault();
  localStorage.setItem("currentUser", input.value);
  paintGreeting(input.value);
}

// currentUser X
function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handlesubmit);
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    paintGreeting(currentUser);
  } else {
    askForName();
  }
}

function init() {
  loadName();
}

init();
