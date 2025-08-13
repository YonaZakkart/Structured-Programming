// 2. Un sistema de registro de usuarios necesita guardar todos los correos 
// electrónicos en minúsculas para evitar duplicados causados por 
// diferencias en mayúsculas y minúsculas. Además, se requiere verificar si 
// el correo pertenece al dominio @gmail.com antes de aceptarlo. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su correo electrónico: ', (correo) => {
    const correoMinus = correo.toLowerCase();
    const esGmail = correoMinus.endsWith('@gmail.com');
    console.log(`Correo en minúsculas : ${correoMinus}`);
    console.log(`¿El correo pertenece al dominio @gmail.com? : ${esGmail}`);
    rl.close();
});