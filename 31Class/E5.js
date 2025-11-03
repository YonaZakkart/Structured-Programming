// Solicita la edad al usuario y muestra en qué categoría está
// -          Niñez 0-11
// -          Adolescencia: 12-17
// -          Adultez: 18-59
// -          Vejez: 60+

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let mensaje;
function verificarEdad(edad) {
    if (edad >= 0 && edad <= 11) {
        mensaje = "Categoria: Ninez";
    } else if (edad >= 12 && edad <= 17) {
        mensaje = "Categoria: Adolescencia";
    } else if (edad >= 18 && edad <= 59) {
        mensaje = "Categoria: Adultez";
    } else if (edad >= 60) {
        mensaje = "Categoria: Vejez";
    } else {
        mensaje = "Edad invalida";
    }
    return mensaje;
}

rl.question("Ingrese su edad: ", (edadInput) => {
    edadInput = parseInt(edadInput);
    mensaje = verificarEdad(edadInput);
    console.log(mensaje);
    rl.close();
})