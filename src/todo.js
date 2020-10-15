const toDoForm = document.querySelector(".js-toDo-form"),
  toDoInput = document.querySelector(".js-toDo-input"),
  toDoList = document.querySelector(".js-toDo-list");

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerHTML = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  paintToDo(toDoInput.value);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
