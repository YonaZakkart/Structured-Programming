import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularDescuento(precio, descuento) {
    precio = parseFloat(precio);
    descuento = parseFloat(descuento);

    let des = precio * descuento
    let pagoFinal = precio - des;

    console.log(`El descuento del producto es: $${des} \nEl precio final a pagar es: $${pagoFinal}`);
}

rl.question("Ingrese el precio del producto: $", precio => {
    rl.question("Ingrese el porcentaje de descuento (en decimal): ", descuento => {
        calcularDescuento(precio, descuento);
        rl.close();
    });
});