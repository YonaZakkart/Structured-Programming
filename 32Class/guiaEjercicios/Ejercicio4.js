// 4-	Crea un programa que calcule el costo del estacionamiento según las horas que el vehículo estuvo en el parqueo.
// Las tarifas son:
// 1 hora → $2
// De 2 a 4 horas → $5
// Más de 4 horas → $10
// El programa debe pedir al usuario cuántas horas estuvo estacionado y mostrar el total a pagar.
// Si el usuario ingresa un número negativo o no válido, se debe mostrar un mensaje de error.

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function costoEstacionamiento(horas) {
    let costo;
    if (horas < 0 || isNaN(horas)) {
        return "Numero de horas ni valido"
    } else if (horas === 1) {
        costo = 2;
    } else if (horas >= 2 && horas <= 4) {
        costo = 5;
    } else if (horas > 4) {
        costo = 10;
    }
    return "El costo dl estacionamiento es $" + costo;
}

rl.question("Ingrese el numero de horas que estuvo estacionado: ", input => {
    const horas = parseInt(input);
    const resultado = costoEstacionamiento(horas);
    console.log(resultado);
    rl.close();
})