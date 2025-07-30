// Ejercicio: Costo de Compra
// Crea un programa en Node.js que permita calcular el costo total de una compra. El 
// programa debe: Solicitar al usuario el precio unitario de un producto (puede ser 
// decimal), solicitar la cantidad de productos comprados (entero). Calcular el costo 
// total multiplicando el precio unitario por la cantidad. 


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el precio unitario del producto: ', (precioUnitario) => {
    rl.question('Ingrese la cantidad de productos comprados: ', (cantidad) => {
        precioUnitario = parseFloat(precioUnitario);
        cantidad = parseInt(cantidad);
        let costoTotal = precioUnitario * cantidad;
        console.log(`El costo total a pagar son: ${costoTotal} dolares`);
        rl.close();
    });
});