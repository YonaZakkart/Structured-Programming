// 1-	Crea un programa con un menú de opciones que le permita al usuario elegir una de las 5 opciones:
// •	Sumar
// •	Restar
// •	Multiplicar
// •	Dividir
// •	Salir
// Cada operación debe realizarse dentro de una función distinta (sumar, restar, etc.) y usarse un switch para elegir la operación.

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

rl.question("Ingrese el primer numero: \n", num1 => {
    rl.question("Ingrese el segundo numero: \n", num2 => {
        rl.question("\nElija una operacion:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir\n (Opcion): ", opcion => {
            let opcionNum = Number(opcion);
            switch (opcionNum) {
                case 1: 1
                    console.log(`\nEl resultado de la suma es: ${sumar(Number(num1), Number(num2))}`);
                    break;
                case 2: 2
                    console.log(`\nEl resultado de la resta es: ${restar(Number(num1), Number(num2))}`);
                    break;
                case 3: 3
                    console.log(`\nEl resultado de la multiplicacion es: ${multiplicar(Number(num1), Number(num2))}`);
                    break;
                case 4: 4
                    console.log(`\nEl resultado de la divicion es: ${dividir(Number(num1), Number(num2))}`);
                    break;
                case 5: 5
                    console.log("\nSaliendo...");
                    break;
                default:
                    console.log("\nOpcion no valida");
                    break;
            } rl.close();
        })
    })
}

) 
