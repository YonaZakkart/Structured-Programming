//pedir nota al usuario,ver si está aprobado o reprobado

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularNota(nota) {
    let mensaje;
    if (nota >= 6) {
        mensaje = "Aprobado"
    } if (nota < 6) {
        mensaje = "Reprobado"
    } return mensaje;
}

rl.question("Ingrese su nota: ", (notaInput) => {
    const nota = parseFloat(notaInput);
    const resultado = calcularNota(nota);
    console.log(`Su estado es: ${resultado}`);
    rl.close();
})
