const numeros = [10, 20, 30, 40, 50];
const meses = new Array('Enero', 'Febrero', 'Marzo');
console.log("Tabla de números:")
console.table(numeros);

const deTodo = ['Hola', 10, null, true, { nombre: 'Juan', trabajo: 'Programador' }, [1, 2, 3]];
console.log("\nArray de todo:")
console.table(deTodo);

//solo Juan
console.log(`\nImprimir solo "Juan": 
    ${deTodo[4].nombre}`);

//en numero 2
console.log(`\nImprimir solo el número 2: 
    ${deTodo[5][1]}`);

//cmabiar el 20 por un 80
numeros[1] = 80;
console.log("\nTabla de números, con el 20 reemplazado por 80:")
console.table(numeros);

//agregar nuevo valor al final del array con el metodo push
meses.push('Abril');
console.log("\nTabla de meses, con Abril agregado al final:")
console.table(meses);

//eliminar el ultimo valor del array con el metodo pop
meses.pop();
console.log("\nTabla de meses, con Abril eliminado:")
console.table(meses);

//eliminar el primer valor del array con el metodo shift
meses.shift();
console.log("\nTabla de meses, con Enero Eliminado:")
console.table(meses);

//agregarb un valor al inicio del array con el metodo unshift
meses.unshift('Enero');
console.log("\nTabla de meses, con Enero agregado al inicio:")
console.table(meses);