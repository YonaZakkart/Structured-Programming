//Ejercicio 2. consumo promedio de viajes
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const litros = [];

rl.question("Ingrese los litros gastados en el primer viaje: ", (litros1) => {
    litros.push(parseFloat(litros1));
    rl.question("Ingrese los litros gastados en el segundo viaje: ", (litros2) => {
        litros.push(parseFloat(litros2));
        rl.question("Ingrese los litros gastados en el tercer viaje: ", (litros3) => {
            litros.push(parseFloat(litros3));

            const consumoPromedio = (litros[0] + litros[1] + litros[2]) / 3;

            console.log(`\nEl consumo promedio de los viajes es de ${consumoPromedio} litros`);
            rl.close();
        })
    })
})


