//1. En un formulario web pides al usuario su nombre completo y quieres 
// asegurarte de que no haya espacios al inicio o final, y además quieres 
// mostrar cuántos caracteres tiene el nombre sin contar ninguno de los espacios. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre completo: ', (nombre) => {
    const nombreLimpio = nombre.trim();
    const nombreSinEspacios = nombreLimpio.replace(" ", '');
    const cantidadCaracteres = nombreSinEspacios.length;
    console.log(`Nombre sin espacios: "${nombreLimpio}"`);
    console.log(`Cantidad de caracteres (sin contar espacios): ${cantidadCaracteres}`);
    rl.close();
});