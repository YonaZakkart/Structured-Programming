// 2. Escriba un programa que solicite al usuario una cadena de texto, este programa debe 
// de contener una función que reciba la cadena como parámetro y devuelva una nueva 
// cadena donde la primera letra de cada palabra esté en mayúsculas.  

import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function capitalizarPalabras(cadena) {
    return cadena
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(" ");
}

rl.question("Ingresa una frase: ", (frase) => {
    const resultado = capitalizarPalabras(frase);
    console.log("Frase con mayuscula inicial en cada palabra:", resultado);
    rl.close();
});