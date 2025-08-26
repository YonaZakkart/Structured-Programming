import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Interfaz de lectura
rl.question("Ingrese un número: \n", (num) => {
    let number = Number(num);

    console.log(`\nNumero Ingresado: ${number}`);

    console.log(`Math.round(${number}) = ${Math.round(number)}`);    //Redondea al entero mas cercano

    console.log(`Math.floor(${number}) = ${Math.floor(number)}`);   //Redondea hacia abajo

    console.log(`Math.ceil(${number}) = ${Math.ceil(number)}`);     //Redondea hacia arriba

    console.log(`Math.sqrt(${number}) = ${Math.sqrt(number)}`);     //Saca la raiz cuadrada del numero ingresado

    console.log(`Math.pow(${number}) = ${Math.pow(number, 2)}`);    //Eleva el numero ingresado a la potencia indicada

    console.log(`Math.abs(${number}) = ${Math.abs(number)}`);       //Devuelve el valor absoluto del numero ingresado

    console.log(`Math.max(${number}) = ${Math.max(number, 10, 1)}`);//Devuelve el numero mayor entre los numeros indicados

    console.log(`Math.min(${number}) = ${Math.min(number, -10, 20)}`);//Devuelve el numero menor entre los numeros indicados

    console.log(`Math.random() = ${Math.random()}`);                 // Devuelve un numero aleatorio entre 0 y 1
    let randomNum = Math.floor(Math.random() * number) + 1;          // Numero aleatorio entre 1 y el numero ingresado
    console.log(`Numero aleatorio entre 1 y ${number}: ${randomNum}`);

    console.log(`toFixed(2) = ${number.toFixed(2)}`);               // Devuelve el numero con 2 decimales

    console.log(`toPrecision(4) = ${number.toPrecision(4)}`);      // Devuelve el numero con 4 cifras significativas

    console.log(`toExponential(2) = ${number.toExponential(2)}`);  // Devuelve el numero en notacion exponencial

    console.log(`toString(2) = ${number.toString(2)}`);               // Devuelve el numero como una cadena en base 2
    console.log(`toString(16) = ${number.toString(16)}`);             // Devuelve el numero como una cadena en base 16

    rl.close();
})