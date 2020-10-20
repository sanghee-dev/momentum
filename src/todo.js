const toDoForm = document.querySelector(".js-toDo-form"),
  toDoInput = document.querySelector(".js-toDo-input"),
  toDoList = document.querySelector(".js-toDo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });

  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "";
  delBtn.addEventListener("click", deleteToDo);
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

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
