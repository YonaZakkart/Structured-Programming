// 3-	Un cine desea automatizar el cálculo del precio de entrada según la edad del cliente.
// Las tarifas son las siguientes:
// •	Niños menores de 12 años: pagan $3.00
// •	Adultos de 12 a 59 años: pagan $5.00
// •	Adultos mayores de 60 años o más: pagan $2.50
// El programa debe:
// Pedir al usuario su edad.
// Mostrar en pantalla el precio que debe pagar.
// Mostrar un mensaje de error si la edad es negativa o no válida

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function precioEntrada(edad) {
    let precio;
    if (edad < 0 || isNaN(edad)) {
        return "Error Edad no valida.";
    } else if (edad < 12) {
        precio = 3;
    } else if (edad >= 12 && edad < 60) {
        precio = 5;
    } else if (edad >= 60) {
        precio = 2.5;
    }
    return `El precio de la entrada es $${precio}`
}

rl.question("Ingrese su edad: ", (input) => {
    const edad = parseInt(input);
    const resultado = precioEntrada(edad)
    console.log(resultado);
    rl.close();
})
