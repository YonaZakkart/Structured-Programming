
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const frutas = ["manzana", "banana", "naranja", "fresa"]

function precioFrutas(fruta) {
    let precio;

    switch (fruta.toLowerCase()) {
        case "manzana":
            precio = 0.75
            break;
        case "banana":
            precio = 0.50
            break;
        case "naranja":
            precio = 0.80
            break;
        case "fresa":
            precio = 1.20;
            break;
        default:
            precio = 0
            break;
    }
    return precio;
}

rl.question("Ingrese el nombre de una fruta: ", fruta => {
    const precio = precioFrutas(fruta);
    if (frutas.includes(fruta.toLowerCase())) {
        console.log(`El precio de la ${fruta} es $${precio}`);
    } else {
        console.log("La fruta ingresada no esta en la lista.");
    } rl.close();
})