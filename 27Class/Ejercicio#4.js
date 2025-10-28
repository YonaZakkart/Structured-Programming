// 4. Escriba un programa que solicite al usuario el precio de tres productos, y cree una 
// función que permita calcular la suma total del precio de los tres productos, mostrar 
// en consola la suma.  

import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularTotal(precio1, precio2, precio3) {
    return precio1 + precio2 + precio3;
}

rl.question("Ingrese el precio del primer producto: ", (p1) => {
    rl.question("Ingrese el precio del segundo producto: ", (p2) => {
        rl.question("Ingrese el precio del tercer producto: ", (p3) => {

            const total = calcularTotal(parseFloat(p1), parseFloat(p2), parseFloat(p3));

            console.log(`La suma total de los tres productos es: $${total.toFixed(2)}`);
            rl.close();
        });
    });
});