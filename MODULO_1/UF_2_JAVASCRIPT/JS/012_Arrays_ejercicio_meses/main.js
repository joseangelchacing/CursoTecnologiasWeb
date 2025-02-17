const meses = [
  "enero",
  "febrero",
  "marzo",
  "Abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
preguntarMes();
function preguntarMes() {
  let num = parseInt(prompt("Ingresa un número del 1 al 12"));
  if (num && num > 0 && num <= 12 && !isNaN(num)) {
    document.write(
      `El mes correspondiente al número ${num} es ${meses[num - 1]}`
    );
    return;
  } else {
    alert("Número inválido");
    preguntarMes();
  }
}
