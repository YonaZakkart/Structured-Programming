// 1. Solicitar tres nombres al usuario para ser guardados en un array y mostrar luego cada uno

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nombres = [];

rl.question("ingrese el primer nombre: ", (nombre1) => {
    nombres.push(nombre1);
    rl.question("ingrese el segundo nombre: ", (nombre2) => {
        nombres.push(nombre2);
        rl.question("ingrese el tercer nombre: ", (nombre3) => {
            nombres.push(nombre3);

            console.log(`\nLos nombres ingresados son: 
                Primer nombre: ${nombres[0]}
                segundo nombre: ${nombres[1]}
                tercer nombre: ${nombres[2]}`);
            rl.close();
        });
    });
});
