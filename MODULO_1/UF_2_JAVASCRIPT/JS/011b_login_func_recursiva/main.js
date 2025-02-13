let intento = 0;
recursiva();

function recursiva() {
  intento++;
  let num = parseInt(prompt("¿Resultado de 9 + 5?"));
  if (num === 14) {
    alert("Correcto!");
    document.write("Bienvenido");
    return;
  }
  if (intento === 3) {
    alert("eres un hacker");
    // window.location.href = "https://mossos.gencat.cat/ca/inici";
  } else if (isNaN(num)) {
    alert("Introduce un NÚMERO");
    recursiva();
  } else {
    alert(num + " no es correcto. Vuelve a intentarlo.");
    recursiva();
  }
}
