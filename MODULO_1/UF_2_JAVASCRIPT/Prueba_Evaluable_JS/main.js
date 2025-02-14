function calcularNota() {
  let nombre = document.getElementById("nombre").value.toUpperCase(); //Obtengo el nombre y lo paso a mayus.
  let notas = [];
  let sumaNotas = 0;

  //FOR para obtener array de notas.
  for (i = 1; i <= 5; i++) {
    let input = document.getElementById(`nota${i}`);
    let nota = parseFloat(input.value);

    //if para comprobar los inputs de notas.
    if (isNaN(nota) || nota < 0 || nota > 10) {
      input.classList.add("error"); //Asigno clase "error" al input para mostrar el error con css.
      return;
    } else {
      sumaNotas += nota;
      notas.push(parseFloat(nota)); //Push para añadir c/nota al array de notas.
      input.classList.remove("error"); //Quito la clase "error" por si se le había asignado antes.
    }
  }

  let promedio = (sumaNotas / notas.length).toFixed(2); //calculo promedio con dos decimales.
  let resultado;

  //switch para asignar valor al resultado de acuerdoa al promedio.
  switch (true) {
    case promedio < 5:
      resultado = "SUSPENDIDO";
      break;
    case promedio >= 5 && promedio < 6:
      resultado = "SUFICIENTE";
      break;
    case promedio >= 6 && promedio < 7:
      resultado = "BIEN";
      break;
    case promedio >= 7 && promedio < 8:
      resultado = "NOTABLE";
      break;
    case promedio >= 8 && promedio <= 10:
      resultado = "SOBRESALIENTE";
      break;
    default:
      resultado = "Nota inválida";
  }

  document.getElementById("card_resultados").style.display = "block"; //se muestra este card que estaba oculto en html.

  //Creo el hmtl con una tabla que imprime notas y promedio.
  document.getElementById("tabla_resultados").innerHTML = ` <tr>
                <th colspan="2" class="media">Alumno: ${nombre}</th>
            </tr>
            <tr>
                <td>NOTA 1:</td>
                <td>${notas[0].toFixed(2)}</td>
            </tr>
            <tr>
                <td>NOTA 2:</td>
                <td>${notas[1].toFixed(2)}</td>
            </tr>
            <tr>
                <td>NOTA 3:</td>
                <td>${notas[2].toFixed(2)}</td>
            </tr>
            <tr>
                <td>NOTA 4:</td>
                <td>${notas[3].toFixed(2)}</td>
            </tr>
            <tr>
                <td>NOTA 5:</td>
                <td>${notas[4].toFixed(2)}</td>
            </tr>
            <tr  class="media">
                <td><b>MEDIA:</b></td>
                <td><b>${promedio}</b></td>
            </tr>
            <tr>
                <td colspan="2" id="notafinal" class=${resultado}><b>${resultado}</b></td>
            </tr>`;
}
