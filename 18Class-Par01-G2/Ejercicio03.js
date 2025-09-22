// 3. Un agente de tránsito necesita registrar la información de los vehículos asegurados en su sistema digital. Para ello, solicita la creación de un objeto en Node.js que almacene tanto los datos del vehículo como los de su seguro. 

// Declara un objeto llamado vehiculo con las propiedades: 

const vehiculo = {
    marca: "Tayota",
    anio: 2020,
    seguro: {
        compania: "compania A",
        numeroPoliza: "123456",
        vigente: true
    }
}

//Cambia el valor de la propiedad compañia dentro de seguro por otro nombre de aseguradora. 
vehiculo.seguro.compania = "Compania B";

//Agrega una nueva propiedad dentro de seguro llamada fechaVencimiento con una fecha de expiración (ejemplo: "2026-05-10"). 
vehiculo.seguro.fechaVencimiento = "2029-05-10";
// Elimina la propiedad vigente del objeto seguro. 
delete vehiculo.seguro.vigente;

// • Muestra en consola la información del vehículo y los datos del seguro en un formato legible utilizando template literal. 
console.log(`Vehiculo:
Marca: ${vehiculo.marca}
Anio: ${vehiculo.anio}
Seguro:
    Compania: ${vehiculo.seguro.compania}
    Numero de Poliza: ${vehiculo.seguro.numeroPoliza}
    Fecha de Vencimiento: ${vehiculo.seguro.fechaVencimiento}`);