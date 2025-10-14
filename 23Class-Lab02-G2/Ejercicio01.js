//Ejercicio 1. gastos del mes

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gastos = [];

rl.question("Ingrese el primer gasto del mes: ", (gasto1) => {
    gastos.push(parseFloat(gasto1));
    rl.question("Ingrese el segundo gasto del mes: ", (gasto2) => {
        gastos.push(parseFloat(gasto2));
        rl.question("Ingrese el tercer gasto del mes: ", (gasto3) => {
            gastos.push(parseFloat(gasto3));

            const gastoTotal = gastos[0] + gastos[1] + gastos[2];

            console.log(`Los gastos del mes ingresados son: 
                Gasto 1: $${gastos[0]}
                Gasto 2: $${gastos[1]}
                Gasto 3: $${gastos[2]}
                \n El gasto total del mes son: $${gastoTotal} dolares`);

            rl.close();
        })
    })
})