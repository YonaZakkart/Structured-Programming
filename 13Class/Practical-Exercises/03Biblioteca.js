//3. una biblioteca maneja informacion de sus libros
//informacion (titulo, autor, genero)
//disponibilidad (copias, prestados, ubicacion)
//registro (frechaPblicacion, fechaIngreso, ultimaRevision)

//Tareas a realizar;

//1. Crear objeto libro
const Libro = {
    informacion: {
        titulo: "Lord Of The Mysteries",
        autor: "Cuttlefish That Loves Diving",
        genero: "Ficcion"
    },
    disponibilidad: {
        copias: 8,
        prestados: 2,
        ubicacion: "Estante 3"
    },
    registro: {
        fechaPublicacion: "2020-01-01",
        fechaIngreso: "2024-01-15",
        ultimaRevision: "2025-06-30"
    }
}
//2. Mostrar la informacion del autor
console.log("Autor:", Libro.informacion.autor)

//3. calcula cuantos ejemplares quedan
const ejemplaresRestantes = Libro.disponibilidad.copias - Libro.disponibilidad.prestados;
console.log("Ejemplares restantes:", ejemplaresRestantes);

//4. Actualizar ultima revision a fecha actualizado
Libro.registro.ultimaRevision = new Date();

//5. Cambiar genero del libro
Libro.informacion.genero = "Horror Lovecraftiano, Fantasía";

//6 extraer titulo y ubicacion en variales
const { titulo } = Libro.informacion;
const { ubicacion } = Libro.disponibilidad;

//7. Mostrar el objeto actualizado 
console.log("\nObjeto actualizado:", Libro);
console.log("\nVariables separadas:");
console.log("Título:", titulo);
console.log("Ubicación:", ubicacion);