// 3.	Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3].

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("#3 - Precio más barato y más caro de una lista de precios");
rl.question("Ingrese los precios separados por comas: \n", (input) => {
    const price = input.split(",").map(Number);
    const priceMin = Math.min(...price);
    const priceMax = Math.max(...price);
    console.log(`El precio más bajo es: ${priceMin}`);
    console.log(`El precio más alto es: ${priceMax}`);
    rl.close();
});

// const precios = [30, 52, 35, 1, 12, -3];
// const precioMinimo = Math.min(...precios);
// const precioMaximo = Math.max(...precios);
// console.log(`El precio más barato es: ${precioMinimo}`);
// console.log(`El precio más caro es: ${precioMaximo}`);
// rl.close();