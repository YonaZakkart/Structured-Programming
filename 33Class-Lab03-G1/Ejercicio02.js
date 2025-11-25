//pedir dos datos, saldo disponible y el precio del producto

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function puedeComprar(saldo, precio) {
    if (saldo >= precio) {
        return "La compra puede realizarse";
    } else {
        return "Saldo insuficiente, no se puede realizar la compra";
    }
}

rl.question("Ingrese su saldo disponible: \n", (saldoInput) => {
    const saldo = parseFloat(saldoInput);
    rl.question("Ingrese el precio del producto: \n", (precioInput) => {
        const precio = parseFloat(precioInput);
        const resultado = puedeComprar(saldo, precio);
        console.log(resultado);
        rl.close();
    })
}) 