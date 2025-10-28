// 8. Cree un programa que solicite al usuario su salario base, el número de horas extras 
// trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total, 
// considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el 
// resultado en la consola.  

import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal) {
    const pagoHorasExtras = horasExtras * valorHoraNormal * 1.5; // Cada hora extra se paga x 1.5
    const salarioTotal = salarioBase + pagoHorasExtras;
    return salarioTotal;
}


rl.question("Ingrese su salario base: ", (salarioInput) => {
    const salarioBase = parseFloat(salarioInput);

    rl.question("Ingrese el número de horas extras trabajadas: ", (horasInput) => {
        const horasExtras = parseFloat(horasInput);

        rl.question("Ingrese el valor de una hora de trabajo normal: ", (valorHoraInput) => {
            const valorHoraNormal = parseFloat(valorHoraInput);

            const salarioTotal = calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal);

            console.log(`El salario total considerando las horas extras es: $${salarioTotal.toFixed(2)}`);

            rl.close();
        });
    });
});
