// Al objeto animal agrega una nueva propiedad (cualquiera) 
const animal = {
    race: "Labrador",
    size: "Large",
    color: "Black",
};
animal.habitat = "Domestic";

//Imprimela en consola 
console.log("Animal with new property: \n", animal);

//y luego elimina la propiedad raza
delete animal.race;
console.log("\nAnimal without race property: \n", animal);