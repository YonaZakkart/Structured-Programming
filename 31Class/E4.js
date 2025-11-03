//Solicitar un nombre y mostrar si está en el arreglo o no está 

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const nombres = ["ana", "juan", "valeria", "yona", "luis"];
function existe(nombre) {
    if (nombres.includes(nombre)) {
        return `El nombre ${nombre} si está en el arreglo`;
    } else {
        return `El nombre ${nombre} no está en el arreglo`;
    }
}

rl.question("Ingrese un nombre: ", (nombreInput) => {
    nombreInput = nombreInput.toLowerCase();
    const mensaje = existe(nombreInput);
    console.log(mensaje);
    rl.close();
})