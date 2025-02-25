let addInput = document.querySelector("#add-task-input"); //Captura de input.
let addButton = document.querySelector(".add-task-button"); //C aptura de boton "agregar tarea"
let list = document.querySelector(".tasks-list"); //Captura de elemento ul donde se agregarán las tareas.
let counter = 0; //Variable contador inicilizada en cero.
let deleteAllBtn = document.querySelector("#delete-all-button");
addInput.focus();

if (addInput.value !== "") {
}
addButton.removeAttribute("disabled");

addButton.addEventListener("click", addTask); //Evento click llamará a función que añade cada tarea.

//Creamos función para añadir tarea.
function addTask() {
  counter++; //Sumamos 1 al contador.
  let task = addInput.value; //Obtenemos valor del input tarea.
  //   if (!task || task === "") return alert("error");

  //Creamos el List Item.
  let newListItem = document.createElement("li");
  newListItem.innerHTML = `${task}`;

  // Creamos boton de borrar (X).
  let newDeleteButton = document.createElement("button");
  newDeleteButton.textContent = "X";
  newDeleteButton.classList.add("delete-button");

  //Agregamos la tarea y su boton al elemento ul. (tarea y botón hijos de ul).
  list.appendChild(newListItem).appendChild(newDeleteButton);
  addInput.value = ""; //Vaciamos el input.
  addInput.focus(); //Focus en el input.
  let buttonsArray = document.querySelectorAll(".delete-button");
  buttonsArray.forEach((element) => {
    element.onclick = function () {
      element.parentNode.remove(element);
      addInput.focus();
    };
  });
}

deleteAllBtn.addEventListener("click", () => {
  let tasksArray = document.querySelectorAll("li");
  tasksArray.forEach((task) => {
    task.remove();
    addInput.focus();
  });
});
