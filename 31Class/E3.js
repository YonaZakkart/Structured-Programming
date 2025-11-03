// Calcular el descuento según el monto de compra: solicite el monto de la compra y aplique un descuento:
//-          Mayor o igual a 100 -> 10%
//-          Entre 50 y 99 -> 5%
//-          Menor a 50 -> sin descuento

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let mensaje;
function calcularDescuento(monto) {
    let descuento = 0;
    if (monto >= 100) {
        descuento = monto * 0.10;
    } else if (monto >= 50 && monto <= 99) {
        descuento = monto * 0.05;
    } else {
        descuento = 0;
    }
    return descuento;
}

rl.question("Ingrese el monto de la compra: ", (montoInput) => {
    montoInput = parseFloat(montoInput);
    const descuento = calcularDescuento(montoInput);
    const pagoTotal = montoInput - descuento;
    mensaje = `El descuento aplicado es de: $${descuento}. \nEl total a pagar es: $${pagoTotal}.`;
    console.log(mensaje);
    rl.close();
})
