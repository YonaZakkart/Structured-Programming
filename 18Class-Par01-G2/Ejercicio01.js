// 1. Sistema de Información Personal. María García, gerente de recursos humanos, 
// necesita crear fichas digitales para nuevos empleados. Cada ficha debe contener 
// información personal y calcular algunos datos automáticamente. 

// Cree un objeto empleado 
const empleado = {
    nombreCompleto: "Ana Lucía Rodríguez",
    edad: 28,
    salario: 1200.50,
    activo: true,
    fechaIngreso: "01/02/2025",
    habilidades: ["excel", "Contabilidad", "Analisis"]
}


//Agregue la propiedad departamento con valor "Contabilidad"  
empleado.departamento = "Contabilidad";
//Modifique el salario aumentándolo en 15%  
const aumento = empleado.salario * 0.15;
empleado.salario = empleado.salario + aumento;
//Elimine la propiedad activo  
delete empleado.activo;

// Genere las siguientes salidas:
// === FICHA DE EMPLEADO ===
// Nombre: ANA LUCÍA RODRÍGUEZ
// Edad: 28 años Salario: $1,380.58
// Departamento: contabilidad
// Año de ingreso: 2025
// Habilidades (3): Excel, Contabilidad, Análisis 

const nombreMayus = empleado.nombreCompleto.toUpperCase();
const salario = empleado.salario
const departamentoMinus = empleado.departamento.toLowerCase();
const anioIngreso = empleado.fechaIngreso.split("/")[2];
const habilidades = empleado.habilidades.join(", ");

console.log(`=== FICHA DE EMPLEADO ===
Nombre: ${nombreMayus}
Edad: ${empleado.edad} años, Salario: $${salario}
Departamento: ${departamentoMinus}
Anio de ingreso: ${anioIngreso}
Habilidades: ${habilidades}`);
// Asi o mas literal? :D