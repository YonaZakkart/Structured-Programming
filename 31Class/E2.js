//Solicitar al usuario un número y determinar si este es un numero positivo o negativo

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const num0 = 0;
let mensaje;

rl.question("Ingrese un numero: ", (numInput) => {
    numInput = parseFloat(numInput);
    if (numInput > num0) {
        mensaje = "El numero es positivo";
    } else {
        mensaje = "El numero es negativo";
    }
    console.log(mensaje);
    rl.close();
})