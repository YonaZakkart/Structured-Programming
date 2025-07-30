// Ejercicio  01
//Solicitar al usuario dos numeros y sumarlos, mostrar el resultado

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer numero para la suma: ', (num1) => {
    rl.question('Ingrese el segundo número para la suma: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        let suma = num1 + num2;
        console.log(`La suma de ${num1} y ${num2} es: ${suma}`)
        rl.close();
    })
})