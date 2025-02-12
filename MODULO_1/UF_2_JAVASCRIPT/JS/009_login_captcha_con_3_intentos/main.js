let intento = 0;    

do {
    let num = parseInt(prompt("¿Resultado de 9 + 5?"))
    if (num === 14) {
        alert('Correcto!');
        document.write("Bienvenido");
        break;
    
    } else if (isNaN(num)) {
        alert("Introduce un NÚMERO");
   
    } else {
        alert(num + " no es correcto. Vuelve a intentarlo.");
    }
    intento++;
    if (intento === 3) {
        alert("eres un hacker");
        window.location.href="https://mossos.gencat.cat/ca/inici";
    }

} while (intento < 3)