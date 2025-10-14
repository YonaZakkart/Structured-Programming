
// function miFuncion(){
//     //proceso a realizar
// }
// miFuncion(); //llamar o invocar la funcion

// function miSaludo() {
//     console.log("Hola, desde JavaScript");
// }
// miSaludo();

// //funciones con parametros
// function saludar(nombre) {
//     console.log("Hola " + nombre + " Bienvenido!!");
// }
// saludar("Dinora");


// function miSaludoObtenido(nombre) {
//     let mensaje = "Hola " + nombre;

//     return mensaje;
// }
// let EnviarNombre = miSaludoObtenido("Elizabeth")
// console.log(EnviarNombre);


// let saludo = function (nombre) {
//     saludar = `Hola ${nombre}!!`

//     return saludar
// }
// console.log(saludo("Eli"));


//funciones de flecha
let saludo = (nombre) => {
    return `Saludos ${nombre} ^^`
}
console.log(saludo("Yona"));

let saludo2 = nombre2 => `Saluditos ${nombre2}`
console.log(saludo2('Yona 2'));