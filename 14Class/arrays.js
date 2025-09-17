// propiedad length
//longitud de array
let coches = ["ford", "B&D", "Civic", "Honda"];
console.log(coches.length); // 4

//ultimo elemento 
const paises = ["Colombia", "Mexico", "Peru", "Chile"];
const ultimo = paises[paises.length - 1];
console.log(ultimo); // Chile

//flexibilidad
//datos mixtos
const mixto = [true, 42, "hola", null, { nombre: "juan" }, [1, 2, 3]];

//array anidados
const matris = [[1, 2][3, 4]];
console.log(matris[0][1]); // 2