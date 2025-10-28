// 3. Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una 
// función que reciba como parámetro el texto y devuelva la cantidad de caracteres que 
// contiene.  

import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function contarCaracteres(cadena) {
    return cadena.length;   //cuenta todos los caracteres
}

rl.question("Ingresa una palabra o texto: ", (texto) => {
    const cantidad = contarCaracteres(texto);
    console.log(`El texto ingresado contiene ${cantidad} caracteres.`);
    rl.close();
});