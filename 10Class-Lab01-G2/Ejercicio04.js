// 4.	Solicita al usuario una frase y muestra los primeros 6 caracteres de esa frase ingresada. 


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese una frase: ", (frase) => {
    const primerosCaracteres = frase.substring(0, 6);
    console.log(`Los primeros 6 caracteres de la frase son los siguientes: ${primerosCaracteres}`);
    rl.close();
})