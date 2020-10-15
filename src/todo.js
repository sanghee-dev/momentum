const toDoForm = document.querySelector(".js-toDo-form"),
  toDoInput = document.querySelector(".js-toDo-input"),
  toDoList = document.querySelector(".js-toDo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerHTML = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = toDos.length + 1;
  toDoList.appendChild(li);

  const toDoObj = {
    id: toDos.length + 1,
    text: text,
  };

  toDos.push(toDoObj);
  saveToDos();
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
