// Crea un objeto usuario con las propiedades:
//usuario, gmail y rol 
const user = {
    username: "Alexander",
    gmail: "alexanderCausa@gmail.com",
    rol: "Admin",
};
//usa destructing para crear variables con esas propiedades y muestralos en consola
const { username, gmail, rol } = user;
console.log("Username: ", username);
console.log("Gmail: ", gmail);
console.log("Role: ", rol);

