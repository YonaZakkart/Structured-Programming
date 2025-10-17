import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function saludar(nombre) {
    console.log(`Hola ${nombre}, bienvenido a JavaScript!`);
}

let resta = (num1, num2) => {
    let res = num1 - num2;
    return res;
}

rl.question("Por favor, ingrese su nombre: ", (nom) => {
    rl.question("Ingrese el primer numero: ", (num1) => {
        rl.question("Ingrese el segundo numero: ", (num2) => {

            saludar(nom);
            console.log(`El resultado de la resta es: ${resta(num1, num2)}`);
            rl.close()
        })
    })
})