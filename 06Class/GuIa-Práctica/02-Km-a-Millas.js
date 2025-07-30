// Ejercicio 2: Conversión de Kilómetros a Millas
// Solicita una cantidad en kilómetros (decimal), convierte a millas, sabiendo que 1km 
// = 0.621371mi. Muestra el resultado con dos decimales. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la cantidad en kilómetros: ', (km) => {
    km = parseFloat(km);
    let millas = km * 0.621371;
    console.log(`${km} Kilometros son ${millas.toFixed(2)} Millas`);
    rl.close();
});