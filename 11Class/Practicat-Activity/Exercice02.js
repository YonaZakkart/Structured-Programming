// 2.	Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("#2 - Generador de Números Aleatorios");
const randomNum = Math.floor(Math.random() * 29 + 1);
console.log(`El número aleatorio generado entre 0 y 29 es: ${randomNum}`);
rl.close();