// 3. de un código generado automáticamente solo se requiere mostrar los 
// últimos 4 caracteres 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el código generado automáticamente: ', (codigo) => {
    const ultimosCuatroCaracteres = codigo.slice(-4);
    console.log(`Los últimos 4 caracteres del código son: ${ultimosCuatroCaracteres}`);
    rl.close();
});