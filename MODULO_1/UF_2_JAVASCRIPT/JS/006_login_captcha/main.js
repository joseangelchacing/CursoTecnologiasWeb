let num = parseInt(prompt("¿Resultado de 9 + 5?"))

if (num != 14) {
    alert(num + " no es correcto. Vuelve a intentarlo");
    windows.location.reload();
} else {
    alert('Correcto!');
    document.write("Bienvenido");
}