let b = 0;
let c = 0;

let geo = null;

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

let applet = new GGBApplet(parametros, true);
applet.inject("geogebra");



document.getElementById("generar").onclick = function() {
  b = Math.floor(Math.random() * 7) - 3;
  c = Math.floor(Math.random() * 7) - 3;

document.getElementById("valorB").innerText = b;
document.getElementById("valorC").innerText = c;

let resultado = "";

if (b === 0 && c === 0) {
    resultado = "No existe función.";
} else if (b === 0) {
    resultado = "FUNCIÓN CONSTANTE\n";
    resultado += "• Fórmula: f(x) = " + c + "\n";
    resultado += "• Es una línea horizontal.\n";
    resultado += "• No es creciente ni decreciente.\n";
    resultado += "• Corta el eje Y en " + c + ".";
} else if (c === 0) {
    resultado = "FUNCIÓN LINEAL\n";
    resultado += "• Fórmula: f(x) = " + b + "x\n";
    resultado += "• Pasa por el origen (0,0).\n";
    resultado += b > 0 ? "• Es creciente." : "• Es decreciente.";
} else {
    resultado = "FUNCIÓN AFÍN\n";
    resultado += "• Fórmula: f(x) = " + b + "x + " + c + "\n";
    resultado += "• No pasa por el origen.\n";
    resultado += "• Corta el eje Y en " + c + ".\n";
    resultado += b > 0 ? "• Es creciente." : "• Es decreciente.";
}

document.getElementById("resultado").innerText = resultado;
};

if (geo !== null) {
    geo.evalCommand("f(x)=" + b + "*x+" + c);
    console.log("f(x)=" + b + "*x+" + c);
}




