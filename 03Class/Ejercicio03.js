// ejercicio nota de estudiante, aprueba si es mayor a 7 o si pasó la recuperacion

let nota = 6.5;
let recuperacion = true;
let aprueba = nota >= 7 || recuperacion ? "Aprobado" : "Reprobado";
console.log("El estudiante está: " + aprueba);
