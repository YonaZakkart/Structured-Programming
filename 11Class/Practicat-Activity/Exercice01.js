// 1.	Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("#1 - Cuadrado y Raíz Cuadrada de un Número ingresado por el usuario");
rl.question("Ingrese un número: \n", (num) => {
    console.log(`El número ${num} elevado al cuadrado es: ${Math.pow(num, 2)}`);
    console.log(`La raíz cuadrada de ${num} es: ${Math.sqrt(num)}`);
    rl.close();
})