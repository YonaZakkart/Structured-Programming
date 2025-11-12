
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese un numero del 1 - 3: \n", num => {
    let numero = Number(num);

    switch (numero) {
        case 1: 1
            console.log("Uno");
            break;
        case 2: 2
            console.log("Dos");
            break;
        case 3: 3
            console.log("Tres");
            break;
        default:
            console.log("El numero ingresado no está entre 1 y 3");
            break;
    }
    rl.close();
})