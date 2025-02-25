let arrayNombres = [];
let addButton = document.querySelector("#addButton");
let sortearButton = document.querySelector("#sortearButton");
let input = document.querySelector("#nombres");
let infoConcursantes = document.querySelector("#infoConcursantes");
let listaNombres = document.querySelector("#listaNombres");
let namesListDiv = document.querySelector(".namesList");
input.focus();

addButton.addEventListener("click", addName);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addName();
  }
});

function addName() {
  let nombre = input.value.trim().toUpperCase();

  if (arrayNombres.length > 0) {
    sortearButton.removeAttribute("disabled");
    input.focus();
  }

  if (arrayNombres.includes(nombre)) {
    alert("Este nombre ya ha sido añadido");
    input.value = "";
    input.focus();
    return;
  }

  if (nombre !== "") {
    arrayNombres.push(nombre);
    namesListDiv.style.visibility = "visible";
    namesListDiv.style.transform = "translateY(0)";
    namesListDiv.style.opacity = "1";
    infoConcursantes.innerHTML = `${arrayNombres.length} concursante(s) añadido(s)`;
    input.value = "";
    let li = document.createElement("li");
    li.textContent = nombre;
    listaNombres.appendChild(li);
    input.focus();
  } else {
    alert("Por favor, introduce un nombre válido.");
    input.focus();
  }
}

function sortear(event) {
  event.preventDefault();
  input.value = "";
  addButton.disabled = true;
  sortearButton.disabled = true;
  input.disabled = true;

  let numLista = Math.floor(Math.random() * arrayNombres.length);
  let ganador = arrayNombres[numLista];
  let ganadorh2 = document.querySelector(".nombreGanador");
  let ganadorDiv = document.querySelector(".div_ganador");

  ganadorh2.textContent = `¡${ganador}!`;

  ganadorDiv.style.display = "block";

  namesListDiv.style.display = "none";
}
