//Declaracion de funciones
function saludar() {
    console.log("Hola w");
}

//expresion de funciones
const despedir = function () {
    console.log(
        "ADios ");
}


//Hoisting 

// Las declaraciones de funciones se pueden llamar antes de su definición, las expresiones de función solo después de ser definidas
saludar();
function saludar() {
    console.log("Hola");
}


// Función VS Método

// Función
// Bloque de código independiente y autónomo - Se invoca por su nombre directamente.
// Método
// Función asociada a un objeto como propiedad- Se invoca a través del objeto.

//funcion independiente
function calcularIva(precio) {
    return precio * 0.19;
}
const iva = calcularIva(500)
console.log(iva); //95

//metodo de un objeto
const producto = {
    nombre: "Laptop",
    precio: 1500,

    //metodo
    aplicarDescuento: function (descuento) {
        return this.precio - (this.precio * descuento);
    }
};
const precioDescuento = producto.aplicarDescuento(0.10);
console.log(precioDescuento);









