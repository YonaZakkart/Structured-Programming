// 1. Escriba un programa que solicite al usuario una cadena de texto (palabra o frase) 
// utilizando la librería readline, el programa debe de contener una función que permita 
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas 
// alfabéticamente.  

import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ordenarLetras(cadena) {
    return cadena.split("").sort().join(""); //Ordenamos alfabéticamente con sort()
}


rl.question("Ingresa una palabra o frase: ", (texto) => {
    const resultado = ordenarLetras(texto);
    console.log("Texto ordenado alfabéticamente:", resultado);
    rl.close();
});