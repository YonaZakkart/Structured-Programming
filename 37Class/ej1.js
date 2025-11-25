
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i += 2) {
//     console.log(i);
// }

// for (let i = 5; i <= 5; i--) {
//     console.log(i);
// }

// let suma = 0;
// for (let i = 1; i <= 10; i++) {
//     suma = suma + i;
//     console.log(suma)
// }

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Ingrese un numero ", numInput => {
    let num = parseInt(numInput)

    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
    rl.close()
})



