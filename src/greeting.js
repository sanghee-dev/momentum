const greetingsForm = document.querySelector(".js-greetings-form"),
  greetingsInput = document.querySelector(".js-greetings-input"),
  greetingsText = document.querySelector(".js-greetings-text");

// currentUser O
function paintGreeting(currentUser) {
  greetingsForm.classList.remove("showing");
  greetingsText.classList.add("showing");

  const date = new Date();
  const hours = date.getHours();

  if (6 <= hours >= 6 && hours < 12) {
    greetingsText.innerHTML = `Good morning, ${currentUser}.`;
  } else if (12 <= hours && hours < 18) {
    greetingsText.innerHTML = `Good afternoon, ${currentUser}.`;
  } else {
    greetingsText.innerHTML = `Good evening, ${currentUser}.`;
  }
}

// X -- > submit --> set
function handlesubmit(event) {
  event.preventDefault();
  localStorage.setItem("currentUser", greetingsInput.value);
  paintGreeting(greetingsInput.value);
}

// currentUser X
function askForName() {
  greetingsForm.classList.add("showing");
  greetingsForm.addEventListener("submit", handlesubmit);
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
