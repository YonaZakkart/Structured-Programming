// Ejercicio: Promedio de Notas
// Crea un programa en Node.js que solicite al usuario tres notas (pueden ser 
// decimales). El programa debe calcular el promedio de las tres notas y mostrar el 
// resultado en consola. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la primera nota: ', (nota1) => {
    rl.question('Ingrese la segunda nota: ', (nota2) => {
        rl.question('Ingrese la tercera nota: ', (nota3) => {
            nota1 = parseFloat(nota1);
            nota2 = parseFloat(nota2);
            nota3 = parseFloat(nota3);
            let promedio = (nota1 + nota2 + nota3) / 3;
            console.log(`El promedio de las notas es: ${promedio}`);
            rl.close();
        });
    });
});