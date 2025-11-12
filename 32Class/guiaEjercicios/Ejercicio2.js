// 2-	Crea una función que muestre un saludo según la hora del día en que se encuentre.
// •	6 a 11:00am : Buenos días
// •	12 a 17 pm : Buenas tardes
// •	18 a 23 pm: Buenas noches
// •	0 a 5: a dormir

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function saludoHora(hora) {
    let saludo;
    if (hora >= 6 && hora <= 11) {
        saludo = "Buenos dias";
    } else if (hora >= 12 && hora <= 17) {
        saludo = "Buenas tardes";
    } else if (hora >= 18 && hora <= 23) {
        saludo = "Buenas novhes";
    } else if (hora >= 0 && hora <= 5) {
        saludo = "A dormir !!";
    } else {
        saludo = "Hora no valida";
    } return saludo;
    // switch (true) {
    //     case (hora >= 6 && hora <= 11):
    //         saludo = "Buenos dias"
    //         break;
    //     case (hora >= 12 && hora <= 17):
    //         saludo = "Buenas tardes"
    //         break;
    //     case (hora >= 18 && hora <= 23):
    //         saludo = "Buenas noches"
    //         break;
    //     case (hora >= 0 && hora <= 5):
    //         saludo = "A dormir!!!"
    //         break;
    //     default:
    //         saludo = "Hora no valida"
    //         break
    // } return saludo;
}

rl.question("Ingrese la hora actual (0-23): ", hora => {
    const saludo = saludoHora(Number(hora));
    console.log(saludo);
    rl.close();
});