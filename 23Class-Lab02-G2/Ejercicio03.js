//Ejercicio 3. Total de compra con iva
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precios = [];

rl.question("Ingrese el precio del primer prodcto: ", (precio1) => {
    precios.push(parseFloat(precio1));
    rl.question("Ingrese el precio del segundo producto: ", (precio2) => {
        precios.push(parseFloat(precio2));
        rl.question("Ingrese el precio del tercer producto: ", (precio3) => {
            precios.push(parseFloat(precio3));

            const subtotal = precios[0] + precios[1] + precios[2];
            const iva = subtotal * 0.13;
            const total = subtotal + iva;

            console.log(`\nEl total de la compra es: $${subtotal}
                \nEl IVA es: $${iva}
                \nEl total a pagar es: $${total}`);
            rl.close();
        })
    })
})