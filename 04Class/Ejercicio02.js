// Ejercicio 2. Solicitar al usuario su color favorito y mostrar un mensaje con la respuesta.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('cuál es tu color favorito? ', (color) => {
    console.log(`Tu color favorito es: ${color}  (^^)/`);
    rl.close();
});























// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('qué color te desagrada mas? ', (color) => {
//     if (color === 'negro') {
//         console.log('RACISTA!!!! ');
//     } else {
//         console.log('No te agrada el color ' + color + '? Está bien  (^^)/');
//     }
//     rl.close();
// }); 