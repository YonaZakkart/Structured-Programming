// 2. Un técnico en informática necesita llevar un registro digital de las computadoras que 
// administra en la empresa. Para ello, se requiere crear un objeto en Node.js que 
// represente una computadora con sus características técnicas. 

// Crea un objeto llamado computadora con las siguientes propiedades:  
const computadora = {
    marca: "Lenovo",
    modelo: "IdealPad 3",
    especificaciones: {
        procesador: "Ryzen 7 7700H",
        ram: "8GB",
        almacenamiento: "512GB SSD",
    }
}

// Modifica el valor de la propiedad ram a "16GB". 
computadora.especificaciones.ram = "16GB";
// Agrega dentro de especificaciones una nueva propiedad llamada sistemaOperativo con el valor "Windows 11". 
computadora.especificaciones.sistemaOperativo = "Windows 11";
//Elimina la propiedad almacenamiento del objeto especificaciones. 
delete computadora.especificaciones.almacenamiento;

// Muestra en consola la información de la computadora en un formato legible utilizando template literals.
console.log(`=== INFORMACIÓN DE LA COMPUTADORA ===
Marca: ${computadora.marca}
Modelo: ${computadora.modelo}
Procesador: ${computadora.especificaciones.procesador}
RAM: ${computadora.especificaciones.ram}
Sistema Operativo: ${computadora.especificaciones.sistemaOperativo}`);