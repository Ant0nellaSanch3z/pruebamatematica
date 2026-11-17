let b = 0;
let c = 0;

document.getElementById("generar").addEventListener("click", function() {

b = Math.floor(Math.random() * 21) - 10;
c = Math.floor(Math.random() * 21) - 10;

document.getElementById("valorB").innerText = b;
document.getElementById("valorC").innerText = c;

if (b == 0 && c == 0) {

document.getElementById("resultado").innerText =
"No existe función.";

} else if (b == 0) {

document.getElementById("resultado").innerText =
"FUNCIÓN CONSTANTE\n" +
"• Fórmula: f(x) = " + c +
"\n• Es una línea horizontal." +
"\n• No es creciente ni decreciente." +
"\n• Corta el eje Y en " + c + ".";

} else if (c == 0) {

document.getElementById("resultado").innerText =
"FUNCIÓN LINEAL\n" +
"• Fórmula: f(x) = " + b + "x" +
"\n• Pasa por el origen (0,0)." +
(b > 0 ? "\n• Es creciente." : "\n• Es decreciente.");

} else {

document.getElementById("resultado").innerText =
"FUNCIÓN AFÍN\n" +
"• Fórmula: f(x) = " + b + "x + " + c +
"\n• No pasa por el origen." +
"\n• Corta el eje Y en " + c + "." +
(b > 0 ? "\n• Es creciente." : "\n• Es decreciente.");

}

});
