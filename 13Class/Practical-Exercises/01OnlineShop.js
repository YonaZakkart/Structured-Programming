// 1. Tienda online gestiona la informacion de sus productos.
// Cada producto debe tener:
//Detalles (nombre, precio, categoria)
//inventario (stock, proveedor, ubicacion)
//historial (fecha de ingreso, ultima venta, ventas totales)

//tareas a realizar:   

// crear el objeto producto.
const producto = {
    detalles: {
        nombre: "Laptop",
        precio: 1000,
        categoria: "Computadoras"
    },
    inventario: {
        stock: 5,
        proveedor: "Proveedor A",
        ubicacion: "Almacen 1"
    },
    historial: {
        fechaIngreso: "2025-08-01",
        ultimaVenta: "2025-09-01",
        ventasTotales: 5
    }
}

//Mostrar unicamente los detalles.
console.log("detalles del producto: ")
console.log(producto.detalles);

//aumentar el stock en 50 unidades.
producto.inventario.stock += 50;

//cambiar la categoria a "Electronica".
producto.detalles.categoria = "Electronica";

//extraer el nombre y precio en variables separadas.
const { nombre, precio } = producto.detalles;

//mostrar el objeto actualizado.
console.log("\nObjeto actualizado:");
console.log(producto);