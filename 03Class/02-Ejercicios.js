//01 Calcula el area de un triangulo (base x altura /2) usando variables y operadores aritméticos.
let base = 10;
let altura = 5;
let areaTriangulo = (base * altura) / 2;
console.log(`01- El área del triángulo es: ${areaTriangulo}`); // 25


//02 Usando operador ternario compara dos números e indica si el primero es mayor, menor oigual al segundo.
let num1 = 8;
let num2 = 12;
let comparacion = (num1 > num2) ? "02- El primer número es mayor" :
    (num1 < num2) ? "02- El primer número es menor" :
        "02- Los números son iguales";
console.log(comparacion); // "El primer número es menor"

//03 Usando operadores lógicos verifica si un número está entre 10 y 20 (ambos inclusive)
let numero = 15;
let estaEntre10y20 = (numero >= 10 && numero <= 20);
console.log(`03- El número ${numero} está entre 10 y 20? ${estaEntre10y20}`); // true



//04 Usa operadores de asignacion para incrementar un valor en 5, luego multiplícalo por 2
let valor = 10;
valor += 5; // Incrementa en 5
valor *= 2; // Multiplica por 2
console.log(`04- El valor final es: ${valor}`); // 30



//05 Compara dos valores y verifica si son iguales en valor (==)y tipo (===).
let valor1 = 10;
let valor2 = "10";
let sonIguales = valor1 == valor2; // Compara solo valor
let sonIgualesTipo = valor1 === valor2; // Compara valor y tipo
console.log(`05- Son los valores iguales? ${sonIguales}
    Son valores del mismo tipo? ${sonIgualesTipo}`);



//06  Usa &18 y para decidlir si un usuario puede acceder (edad > 18 y tiene membresía, o es administrador).