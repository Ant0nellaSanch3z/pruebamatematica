// Buscamos los elementos del HTML

let boton = document.getElementById("generar");

let valorB = document.getElementById("valorB");
let valorC = document.getElementById("valorC");

let resultado = document.getElementById("resultado");

// Buscamos los recuadros

let lineal = document.getElementById("lineal");
let afin = document.getElementById("afin");
let constante = document.getElementById("constante");
let nula = document.getElementById("noExiste");

// Buscamos los textos

let textoLineal = document.getElementById("textoLineal");
let textoAfin = document.getElementById("textoAfin");
let textoConstante = document.getElementById("textoConstante");


// Esconder todos los recuadros

function esconder() {
    lineal.style.display = "none";
    afin.style.display = "none";
    constante.style.display = "none";
    nula.style.display = "none";
}


// Creamos todas las combinaciones posibles de b y c

let combinaciones = [];

for (let b = -3; b <= 3; b++) {
    for (let c = -3; c <= 3; c++) {
        combinaciones.push({ b: b, c: c });
    }
}


// Mezclamos las combinaciones para que aparezcan sin un orden fijo

function mezclar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temporal = lista[i];
        lista[i] = lista[j];
        lista[j] = temporal;
    }
}

mezclar(combinaciones);


// Sacamos una nueva combinación en cada clic

function crearFuncion() {

    if (combinaciones.length === 0) {
        for (let b = -3; b <= 3; b++) {
            for (let c = -3; c <= 3; c++) {
                combinaciones.push({ b: b, c: c });
            }
        }
        mezclar(combinaciones);
    }

    let valores = combinaciones.pop();
    let b = valores.b;
    let c = valores.c;


    // Mostrar los numeros en la pagina

    valorB.textContent = b;
    valorC.textContent = c;

    // Esconder los resultados anteriores

    esconder();


    // Si los dos numeros son cero

    if (b == 0 && c == 0) {

        resultado.textContent = "NO HAY FUNCION";

        nula.style.display = "block";

    }


    // Si b es cero y c es distinto de cero

    else if (b == 0) {

        resultado.textContent = "La funcion es CONSTANTE";

        constante.style.display = "block";

        textoConstante.innerHTML = `
            <p>La ecuacion es: f(x) = ${c}</p>
            <p>Es una linea recta horizontal.</p>
            <p>Su pendiente es cero.</p>
            <p>Corta el eje Y en el punto (0, ${c}).</p>
            <p>Su valor siempre es el mismo.</p>
        `;

    }


    // Si c es cero, es una funcion lineal

    else if (c == 0) {

        resultado.textContent = "La funcion es LINEAL";

        lineal.style.display = "block";

        textoLineal.innerHTML = `
            <p>La ecuacion es: f(x) = ${b}x</p>
            <p>Pasa por el origen (0,0).</p>
            <p>Su pendiente es ${b}.</p>
            <p>${b > 0 ? "Es creciente." : "Es decreciente."}</p>
            <p>Su grafica es una linea recta.</p>
        `;

    }


    // Si b y c son distintos de cero, es afin

    else {

        resultado.textContent = "La funcion es AFIN";

        afin.style.display = "block";

        textoAfin.innerHTML = `
            <p>La ecuacion es: f(x) = ${b}x + (${c})</p>
            <p>No pasa por el origen.</p>
            <p>Corta el eje Y en (0, ${c}).</p>
            <p>Su pendiente es ${b}.</p>
            <p>${b > 0 ? "Es creciente." : "Es decreciente."}</p>
            <p>Es una linea recta.</p>
        `;

    }

}


// Cuando apretamos el boton se crea otra funcion

boton.addEventListener("click", crearFuncion);
