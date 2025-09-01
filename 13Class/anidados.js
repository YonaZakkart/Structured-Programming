
const student = {
    name: "Juan",
    lastname: "Cruz",
    age: "21 anios",
    direction: {
        country: "El Salvador",
        city: "San Miguel",
        zip: "12345"
    }
}
console.log(student);
console.log(student.direction);

// console.log(student["direction"]);

//adding new property to object 
student.eyesColor = "Blue"
console.log(student);

//adding new property to object nested
student.direction.house = "27"
console.log(student.direction);