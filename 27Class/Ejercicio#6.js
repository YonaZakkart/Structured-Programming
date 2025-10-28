// 6. Solicite al usuario una temperatura en grados celsius y cree una función que permita 
// convertir esa temperatura Celsius a Fahrenheit.  

import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertirFahrenheit(celsius) {
    // F = (C × 9/5) + 32
    return (celsius * 9 / 5) + 32;
}


rl.question("Ingrese la temperatura en grados Celsius: ", (input) => {
    const celsius = parseFloat(input); // texto a número

    if (isNaN(celsius)) {
        console.log("Por favor ingrese un valor numerico válido."); //si no es un numero
    } else {
        const fahrenheit = convertirFahrenheit(celsius);
        console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);
    }

    rl.close();
});