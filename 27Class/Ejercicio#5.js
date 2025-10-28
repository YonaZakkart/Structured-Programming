//5. Solicite al usuario una cadena y utilice una función que permita devolver el texto en 
// mayúsculas.  

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertirMayusculas(texto) {
    return texto.toUpperCase();
}

rl.question("Ingrese una cadena de texto: ", (cadena) => {
    const resultado = convertirMayusculas(cadena);
    console.log(`Texto en mayusculas: ${resultado}`);
    rl.close();
});