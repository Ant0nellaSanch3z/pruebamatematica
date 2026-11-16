let b = 0;
let c = 0;

document.getElementById("generar").onclick = function() {

b = Math.floor(Math.random() * 21) - 10;
c = Math.floor(Math.random() * 21) - 10;

document.getElementById("valorB").textContent = b;
document.getElementById("valorC").textContent = c;

if (c == 0) {
document.getElementById("lineal").textContent =
"Es una función lineal. Pasa por el origen.";

document.getElementById("afin").textContent = "";
} else {
document.getElementById("afin").textContent =
"Es una función afín. Corta el eje Y en " + c + ".";

document.getElementById("lineal").textContent = "";
}

if (b > 0) {
document.getElementById("lineal").textContent += " Es creciente.";
document.getElementById("afin").textContent += " Es creciente.";
} else if (b < 0) {
document.getElementById("lineal").textContent += " Es decreciente.";
document.getElementById("afin").textContent += " Es decreciente.";
} else {
document.getElementById("lineal").textContent += " Es constante.";
document.getElementById("afin").textContent += " Es constante.";
}

};
