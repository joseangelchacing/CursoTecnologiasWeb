let num = parseInt(prompt("¿Resultado de 9 + 5?"))

if (num === 14) {
    alert('Correcto!');
    document.write("Bienvenido");
    
    
} else if (isNaN(num)) {
    alert("Introduce un NÚMERO");
   
} else {
    alert(num + " no es correcto. Vuelve a intentarlo.");
}