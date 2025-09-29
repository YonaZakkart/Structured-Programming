//3. Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const temperaturas = [];

rl.question("Ingrese la temperatura del dia 1: ", (temp1) => {
    temperaturas.push(temp1);
    rl.question("Ingrese la temperatura del dia 2: ", (temp2) => {
        temperaturas.push(temp2);
        rl.question("Ingrese la temperatura del dia 3: ", (temp3) => {
            temperaturas.push(temp3);

            const tempMax = Math.max(parseFloat(temperaturas[0]), parseFloat(temperaturas[1]), parseFloat(temperaturas[2]));
            console.log(`\nLa temperatra mas alta en los tres dias fue: ${tempMax}`);
            rl.close();
        })
    })
})