//2. Una app movil necesita gestionar los perfiles de sus usuario. se requiere un objeto anidado que contenga:
//Informacion personal (nombre, edad, email)
//estadisticas de uso (frechaRegistro, ultimoAcceso, numeroSesiones).

//tarea a realizar:

// Crear objeto perfil usuario con tres objetos anidados
const perfilUsuario = {
    informacionPersonal: {
        nombre: "Juan",
        edad: 20,
        email: "juan@gmail.com"
    },
    estadisticasUso: {
        fechaRegistro: "2025-08-01",
        ultimoAcceso: "2025-08-27",
        numeroSesiones: 47
    },
    preferencias: {
        idioma: "espanol",
        notificaciones: true
    }
}

//mostrar cada seccion de informacion por separado
console.log("Informacion Personal:", perfilUsuario.informacionPersonal);
console.log("\nEstadisticas de Uso:", perfilUsuario.estadisticasUso);
console.log("\nPreferencias:", perfilUsuario.preferencias);

//cambiar el idioma de "espanol" a "ingles"
perfilUsuario.preferencias.idioma = "ingles";

//actualizar la ultima fecha de ingreso a la actualizado
perfilUsuario.estadisticasUso.ultimoAcceso = new Date()

//Eliminar una preferencia innecesaria
delete perfilUsuario.preferencias.notificaciones

// extraer el email y el idioma en variables separadas
const email = perfilUsuario.informacionPersonal.email
const idioma = perfilUsuario.preferencias.idioma

//mostrar el perfil completo actualizado
console.log("\nPerfil de Usuario Actualizado:");
console.log(perfilUsuario);
console.log("\nVariables extraidas:")
console.log("Email:", email);
console.log("Idioma:", idioma);