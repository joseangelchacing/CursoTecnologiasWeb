function calcularDescuento(precio, descuento) {
  return precio - (descuento * precio) / 100;
}

document.getElementById("calcular").addEventListener("click", function () {
  let precio = parseFloat(document.getElementById("price").value);
  let descuento = parseFloat(document.getElementById("discount").value);

  if (isNaN(precio) || isNaN(descuento)) {
    document.getElementById("resultado").innerText =
      "Por favor, ingresa valores válidos.";
    return;
  }

  let precioFinal = calcularDescuento(precio, descuento);
  document.getElementById("resultado").innerText =
    "Precio final: " + precioFinal.toFixed(2) + "€";
});
