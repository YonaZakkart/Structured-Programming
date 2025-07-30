// Ejercicio 02
// Solicitar al usuario la temperatura en grados Celsius y convertirla a Fahrenheit, mostrar el resultado
// (c* 9/5) + 32 = f

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la temperatura en Grados Celsius: ', (Celsius) => {
    let Fahrenheit = parseFloat(Celsius) * 9 / 5 + 32;
    console.log(`${Celsius} Grados Celsius es equivalente a: ${Fahrenheit} Grados Fahrenheit`);
    rl.close();
})
