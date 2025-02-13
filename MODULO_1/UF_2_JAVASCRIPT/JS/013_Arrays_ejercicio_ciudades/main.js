var ciudades = [];
const lista = document.getElementById("listaOrdenada");

for (let i = 0; i < 4; i++) {
  ciudades[i] = prompt(`Introduce el nombre de la ciudad ${i + 1}`);

  if (!ciudades[i] || !isNaN(ciudades[i]) || ciudades[i].trim().length === 0) {
    alert("Por favor, ingresa un nombre válido para la ciudad.");
    i--;
    continue;
  }

  let item = document.createElement("li");
  item.textContent = ciudades[i];
  item.setAttribute("data-index", i);
  lista.appendChild(item);
}

let boton = document.createElement("button");
boton.type = "button";
boton.textContent = "Eliminar ciudad";
document.body.appendChild(boton);

function eliminar() {
  let ciudadElegida = parseInt(prompt(`¿Cúal ciudad quieres eliminar?`)) - 1;

  if (
    ciudadElegida >= 0 &&
    ciudadElegida < ciudades.length &&
    !isNaN(ciudadElegida)
  ) {
    ciudades.splice(ciudadElegida, 1);

    let items = document.querySelectorAll("li");

    let ciudadAEliminar = items[ciudadElegida];

    if (ciudadAEliminar) {
      ciudadAEliminar.remove();
      items = document.querySelectorAll("li");
      items.forEach((item, index) => {
        item.setAttribute("data-index", index);
      });
    }
  } else {
    alert("Ingrese un número válido caballero");
  }
}

boton.addEventListener("click", eliminar);
