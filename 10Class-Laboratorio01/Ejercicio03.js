//3.	Solicita al usuario una frase que contenga la palabra usuario y muestra en qué posición aparece.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese una frase que contenga la palabra 'usuario': ", (frase) => {
    const fraseMinus = frase.toLowerCase();
    const posicion = fraseMinus.indexOf("usuario");
    console.log(`La palabra 'usuario' se encuenta en la posicion: ${posicion}`)
    rl.close();
})