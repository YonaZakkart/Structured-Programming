//Solicitar edad y si dispone de una computadora (si/no)

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Ingrese su edad: ", (edadInput) => {
    const edad = parseFloat(edadInput)
    rl.question("Tiene una computadora? (si/no): \n", (input) => {
        const inputPC = input.toLowerCase()
        let tienePc;
        switch (inputPC) {
            case "si":
                tienePc = true;
                break;
            case "no":
                tienePc = false;
                break;
            default:
                console.log("Por favor ingrese 'si' o 'no'");
                rl.close();
                return;
        }
        if (edad >= 15 && tienePc) {
            console.log("Puede inscribirse en el curso");
        } else {
            console.log("No cumple con los requisitos para inscribirse al curso");
        }
        rl.close();
    })
})