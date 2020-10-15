const toDoForm = document.querySelector(".js-toDo-form"),
  toDoInput = document.querySelector(".js-toDo-input"),
  toDoList = document.querySelector(".js-toDo-list");

function handleSubmit(event) {
  event.preventDefault();
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
