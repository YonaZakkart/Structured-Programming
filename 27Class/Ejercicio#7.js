// 7. Cree una función que permita calcular el descuento de un producto. Solicite al usuario 
// el precio de un producto y el porcentaje de descuento, devuelva el precio final.  

import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularDescuento(precio, porcentaje) {
    const descuento = (precio * porcentaje) / 100;
    const precioFinal = precio - descuento;
    return precioFinal;
}

rl.question("Ingrese el precio del producto: ", (precioInput) => {
    const precio = parseFloat(precioInput);

    if (isNaN(precio) || precio <= 0) {
        console.log("Por favor ingrese un precio valido.");
        rl.close();
        return;
    }


    rl.question("Ingrese el porcentaje de descuento: ", (porcentajeInput) => {
        const porcentaje = parseFloat(porcentajeInput);

        const precioFinal = calcularDescuento(precio, porcentaje);
        console.log(`El precio final con un descuento del ${porcentaje}% es: $${precioFinal.toFixed(2)}`);

        rl.close();
    });
});