let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//creamos funcion que encuentra e imprime elementos especificos de la matriz
function encuentraNumeros(valor, num1, num2) {
  valor.forEach((fila) => {
    fila.forEach((elemento) => {
      if (elemento === num1 || elemento === num2) {
        document.write(`${elemento}<br>`);
      }
    });
  });
}

//creamos funcion para escribir la matriz
function escribir(matriz) {
  matriz.forEach((fila) => {
    fila.forEach((valor) => {
      document.write(`${valor}  `);
    });
    document.write(`<br>`);
  });
}

//creamos la funcion para modificar la matriz (sin escribirla)
function modifica(valor, caracter) {
  valor.forEach((fila, i) => {
    fila.forEach((elemento, j) => {
      if (elemento % 3 === 0) {
        valor[i][j] = caracter;
      }
    });
  });
}

//llamamos a la funcion para que encuentre e imprima los 3 y 5.
encuentraNumeros(matriz, 3, 5);
document.write("<hr>");

//llamamos funcion que imprime matriz en 3 filas y 3 columnas
escribir(matriz);
document.write("<hr>");

//llamamos la funcion modificar matriz. usando caracter = 'm'
let caracter = "m";
modifica(matriz, caracter);

//volvemos a llamar funcion de escribir matriz (ya modificada)
escribir(matriz);
