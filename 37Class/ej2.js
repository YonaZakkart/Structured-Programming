
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let veces = 0;
rl.question("Ingrese un mensaje ", mensaje => {
    rl.question("Cuantas veces quiere que el mensaje se repita? ", vecesInp => {
        veces = parseInt(vecesInp)

        for (let i = 1; i <= veces; i++) {
            console.log(`${i}. ${mensaje}`)
        }
        rl.close()
    })
})