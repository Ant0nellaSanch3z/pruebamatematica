var b = 0;
var c = 0;

document.getElementById("generar").onclick = function() {
  b = Math.floor(Math.random() * 21) - 10;
  c = Math.floor(Math.random() * 21) - 10;

    document.getElementById("valorB").textContent = b;
    document.getElementById("valorC").textContent = c;

if (c == 0) {
    document.getElementById("lineal").textContent = "f(x) = " + b + "x";
    document.getElementById("afin").textContent = "";
} else {
    document.getElementById("lineal").textContent = "";
    document.getElementById("afin").textContent = "f(x) = " + b + "x + " + c;
}

if (b > 0) {
    document.getElementById("lineal").textContent += " Creciente";
    document.getElementById("afin").textContent += " Creciente";
} else if (b < 0) {
    document.getElementById("lineal").textContent += " Decreciente";
    document.getElementById("afin").textContent += " Decreciente";
} else {
    document.getElementById("lineal").textContent += " Constante";
    document.getElementById("afin").textContent += " Constante";
}
};

