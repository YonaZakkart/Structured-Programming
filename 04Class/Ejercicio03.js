// Ejercicio 3. Solicitar al usuario 2 palabras y luego mostrarlas juntas

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cuando es tu cumple? ', (palabra1) => {
    rl.question('Cuantos anios cumples? ', (palabra2) => {
        console.log(`En  ${palabra1} cumpliras ${palabra2} anios  (^^)/`);
        rl.close();
    });
});