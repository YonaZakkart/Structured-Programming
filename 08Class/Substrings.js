//Un sistema de gestion de pedidos recibe codigos de seguimieno en el formato: PED-2025-00045, Se necesita extraer el anio del pedido y el numero de orden usando el metodo substring().
//Requisitos:
//1. Extraer el anio del pedido (2025) y el numero de orden (00045) usando substring().

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese el código de seguimiento del pedido 
    (Ejemplo: PED-2025-00045) : `, (codigo) => {
    const anio = codigo.substring(4, 8);
    const numeroOrden = codigo.substring(9);
    console.log(`Año del pedido: ${anio}`);
    console.log(`Número de orden: ${numeroOrden}`);
    rl.close();
})