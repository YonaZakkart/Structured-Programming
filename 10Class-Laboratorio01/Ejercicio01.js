// 1.	Solicita un nombre completo de usuario, muestra en consola los primeros 5 caracteres de ese nombre, sin espacios, en minúscula y agrega @gmail.com al final para crear una dirección de correo con ese nombre de usuario.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Ingrese su nombre completo: ", (nombre) => {
    const minus = nombre.toLowerCase();
    const sinEspacios = minus.replaceAll(" ", "");
    const correo = sinEspacios.substring(0, 5);
    console.log(`Su correo electronico es: ${correo}@gmail.com`);
    rl.close();
})