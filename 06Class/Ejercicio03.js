// Ejercicio 03
// Calcular el area de un rectangulo, Solicitar al usuario base y altura

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la base del rectángulo: ', (base) => {
    rl.question('Ingrese la altura del rectángulo: ', (altura) => {
        base = parseFloat(base);
        altura = parseFloat(altura);
        let area = base * altura;
        console.log(`El área del rectángulo es: ${area}`);
        rl.close();
    });
});