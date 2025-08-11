//importar el modulo
import readline from 'readline';

//Crear la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//pregunt al usuario
rl.question('Ingrese una frase: ', (frase) => {
    console.log(`\n === tratamiento de cadenas ====`);

    //1. Length
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es: ${fraseLength}`);

    //2. toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayúsculas es: ${fraseMayus}`);

    //3. toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minúsculas es: ${fraseMinus}`);

    //4. trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y al final es: '${fraseTrim}'`);

    //5. substring
    const subCadena = frase.substring(2, 5);
    console.log(`Los caracteres tomados de la frase son: '${subCadena}'`);

    //6. slice
    const subCadenaSlice = frase.slice(-5);
    console.log(`Los caracteres tomados de la frase son: '${subCadenaSlice}'`);

    //7. replace
    const fraseReemplazada = frase.replace('Hola', 'Adiós');
    console.log(`La frase con reemplazos es: '${fraseReemplazada}'`);

    // 8. replace all
    const fraseReemplazadaAll = frase.replaceAll('Hola', 'Adiós');
    console.log(`La frase con todos los reemplazos es: '${fraseReemplazadaAll}'`);

    //9. split 
    const fraseArray = frase.split(' ');
    console.log(`Las palabras de la frase son: ${fraseArray}`);

    //10. includes
    const incluyeHola = frase.includes('Hola');
    console.log(`¿La frase incluye 'Hola'? ${incluyeHola}`);

    //11. indexOf
    const indiceHola = frase.indexOf('Hola');
    console.log(`El índice de 'Hola' en la frase es: ${indiceHola}`);

    //12. startsWith
    const empiezaConHola = frase.startsWith('Hola');
    console.log(`La frase empieza con 'Hola'? ${empiezaConHola}`);

    //13. endsWith
    const terminaConMundo = frase.endsWith('causa');
    console.log(`La frase termina con 'causa'? ${terminaConMundo}`);

    rl.close();
})