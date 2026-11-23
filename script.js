// Valores de la función
let b = 0;
let c = 0;
let geo = null;

// Configuración de GeoGebra
let parametros = {
appName: "graphing",
width: 800,
height: 450,
showToolBar: false,
showMenuBar: false,
appletOnLoad: function(api) {
    geo = api;
}
};

// Crear el gráfico
let applet = new GGBApplet(parametros, true);
applet.inject("geogebra");

// Generar una función al pulsar el botón
document.getElementById("generar").onclick = function() {
  let b = Math.floor(Math.random() * 7) - 3;
  let c = Math.floor(Math.random() * 7) - 3;

document.getElementById("valorB").innerText = b;
document.getElementById("valorC").innerText = c;

let resultado = "";

// Clasificar la función
// Comprueba si b y c son cero
if (b === 0 && c === 0) {
    resultado = "No existe función.";

// Comprueba si es una función constante
} else if (b === 0) {
    resultado = "FUNCIÓN CONSTANTE\n";
    resultado += "• Fórmula: f(x) = " + c + "\n";
    resultado += "• Es una línea horizontal.\n";
    resultado += "• No es creciente ni decreciente.\n";
    resultado += "• Corta el eje Y en " + c + ".";

// Comprueba si es una función lineal
} else if (c === 0) {
    resultado = "FUNCIÓN LINEAL\n";
    resultado += "• Fórmula: f(x) = " + b + "x\n";
    resultado += "• Pasa por el origen (0,0).\n";
    resultado += b > 0 ? "• Es creciente." : "• Es decreciente.";

// Comprueba si es una función afín
} else {
    resultado = "FUNCIÓN AFÍN\n";
    resultado += "• Fórmula: f(x) = " + b + "x + " + c + "\n";
    resultado += "• No pasa por el origen.\n";
    resultado += "• Corta el eje Y en " + c + ".\n";
    resultado += b > 0 ? "• Es creciente." : "• Es decreciente.";
}

// Muestra el resultado en la página
document.getElementById("resultado").innerText = resultado;

// Dibujar la función en GeoGebra
if (geo !== null) {
    geo.evalCommand("f(x)=" + b + "*x+" + c);
}
};




    