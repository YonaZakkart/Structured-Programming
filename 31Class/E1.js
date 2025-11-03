//Solicitar al usuario una contraseña y verificar si esta es correcta o no

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const contra = "admin";
let mensaje;

rl.question("Ingrese la contrasenia: ", (passInput) => {
    if (passInput === contra) {
        mensaje = "Contrasenia correcta";
    } else {
        mensaje = "Contrasenia incorrecta";
    }
    console.log(mensaje);
    rl.close();
})