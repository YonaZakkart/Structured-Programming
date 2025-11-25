// Solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Ingrese un numero ", numInput => {
    let num = parseInt(numInput)

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
    rl.close()
})