let addInput = document.querySelector("#add-task-input"); //Captura de input.
let addButton = document.querySelector(".add-task-button"); //C aptura de boton "agregar tarea"
let list = document.querySelector(".tasks-list"); //Captura de elemento ul donde se agregarán las tareas.
let counter = 0; //Variable contador inicilizada en cero.
let deleteAllBtn = document.querySelector("#delete-all-button");
addInput.focus();

//Si el input esta vacío, el boton de Añadir Tarea estará disabled.
addInput.addEventListener("input", () => {
  addButton.disabled = addInput.value.length === 0;
});

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

  //Añadimos boton de borrar todos cuando hayan al menos dos list items.
  if (counter === 2) deleteAllBtn.classList.remove("delete-all-button");

  //Agregamos la tarea y su boton al elemento ul. (tarea y botón hijos de ul).
  list.appendChild(newListItem).appendChild(newDeleteButton);
  addInput.focus(); //Focus en el input.
  addInput.value = ""; //Vaciamos el input.
  addButton.disabled = true;

  let buttonsArray = document.querySelectorAll(".delete-button");

  //For each en el array de botones para eliminar su padre (il)
  buttonsArray.forEach((element) => {
    element.onclick = function () {
      element.parentNode.remove(element); //Elimina su padre con cada click
      counter--; //Bajamos el contador
      if (counter < 2) deleteAllBtn.classList.add("delete-all-button"); //Cuando haya menos de 2 botones quitamos el botton de Borrar Todos
      addInput.focus();
    };
  });
}

//Evento del botón "Borrar Todo"
deleteAllBtn.addEventListener("click", () => {
  let tasksArray = document.querySelectorAll("li"); //Pbtenemos array de tareas (items list).
  deleteAllBtn.classList.add("delete-all-button"); //Añadimos al botón clase con Display:none.
  counter = 0; //Levamos el contador a 0
  tasksArray.forEach((task) => {
    task.remove(); //Borramos cada tearea.
    addInput.focus();
  });
});
