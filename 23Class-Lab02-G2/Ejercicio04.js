//ejercicio 4. calcular salario
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const datosEmpleado = [];

rl.question("Ingrese el sueldo base: ", (sueldo) => {
    datosEmpleado.push(parseFloat(sueldo));
    rl.question("Ingrese el bono: ", (bono) => {
        datosEmpleado.push(parseFloat(bono));
        rl.question("Ingrese el descuento por seguro: ", (descuento) => {
            datosEmpleado.push(parseFloat(descuento));

            const salarioFinal = datosEmpleado[0] + datosEmpleado[1] - datosEmpleado[2];

            console.log(`\nInformacion de salario: 
                Sueldo base: $${datosEmpleado[0]}
                Bono : $${datosEmpleado[1]}
                Descuento por seguro: $${datosEmpleado[2]}
                \nSalario final: $${salarioFinal}`)
            rl.close();
        })
    })
})











