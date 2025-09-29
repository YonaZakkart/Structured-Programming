//2. Solicitar al usuario tres números y calcula el promedio
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [];

rl.question("ingrese el primer numero: ", (num1) => {
    numeros.push(num1);
    rl.question("ingrese el segundo numero: ", (num2) => {
        numeros.push(num2);
        rl.question("ingrese el tercer numero: ", (num3) => {
            numeros.push(num3);

            const promedio = (parseFloat(numeros[0]) + parseFloat(numeros[1]) + parseFloat(numeros[2])) / 3;

            console.log(`\nEl promedio de los numeros ingresados es: ${promedio}`);
            rl.close();
        });
    });
});

