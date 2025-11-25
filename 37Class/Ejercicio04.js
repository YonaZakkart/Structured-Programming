// * Pide al usuario que ingrese 3 nombres separados por espacio. Usa for para mostrarlos uno por uno.

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Ingrese 3 nombres separados por espacios: ", nombreInput => {
    const nombres = nombreInput.split(" ")

    for (let i = 0; i < nombres.length; i++) {
        console.log(`Nombre ${i + 1}: ${nombres[i]}`);
    }
    rl.close()
})