
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// isNaN ("Hola") => true
// isNaN (123) => false
// isNaN ("123") => true

// Ejercicio: Verificar si un valor ingresado es un número válido

rl.question('Ingrese un número: ', (numero) => {
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        console.log('El valor ingresado no es un número válido.');
    } else {
        console.log(`El número ingresado es: ${numero}`);
    }
    rl.close();
});