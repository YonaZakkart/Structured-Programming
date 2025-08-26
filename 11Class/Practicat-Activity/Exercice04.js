//Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). 
// El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 
// y redondear hacia arriba y mostrar el piso correspondiente.

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("#4 - Calcular el piso de una habitación en un edificio");
rl.question("Ingrese el número de la habitación: \n", (input) => {
    const roomNumber = parseInt(input);
    const floor = Math.ceil(roomNumber / 10);
    console.log(`La habitación ${roomNumber} está en el piso ${floor}.`);
    rl.close();
});