

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer numero: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
        let suma = parseInt(num1) + parseInt(num2)
        console.log(`La suma de ${num1} y ${num2} es: ${suma}`)
        rl.close();
    })
})