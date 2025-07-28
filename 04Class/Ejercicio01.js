// Ejercicio 1. Preguntar al usuario en qué ciudad vive y mostrar un mensaje con la respuesta.

// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('En qué ciudad vives? ', (ciudad) => {
//     console.log(`Vives en ${ciudad}, verdad?`);
//     rl.close();
// }); 








import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('En qué ciudad vives? ', (ciudad) => {
    if (ciudad === 'peru')
        console.log('Hola causa')
    else
        console.log(`${ciudad} es una linda ciudad`)
    rl.close();
}); 