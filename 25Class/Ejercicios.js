//1. Calcular el cuadrado de un número
let cuadrado = (num) => num * num;
console.log("El cuadrado de 5 es: " + cuadrado(5));


//2. Calcular el promedio de 3 numeros
let promedio = (n1, n2, n3) => {
    let resultado = (n1 + n2 + n3) / 3;
    return resultado
}
console.log("\nEl promedio de 5, 10 y 15 es: " + promedio(5, 10, 15));


//3. Clacular el area de un triangulo
let areaTriagulo = (base, altura) => {
    let area = (base * altura) / 2;
    return area;
}
console.log("\nEl area del triangulo es: " + areaTriagulo(5, 10));