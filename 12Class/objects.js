const name = "Yona";
const age = 25;
const height = 170;

//create objects with 'object literal'
const person = {
    name: "Yona",
    age: 25,
    height: 170
}

// accessing object properties with point
console.log("Objects properties with point:");
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Height: ${person.height}`);

// accessing object properties with brackets
console.log("\nObjects properties with brackets:");
console.log(`Name: ${person["name"]}`);
console.log(`Age: ${person["age"]}`);
console.log(`Height: ${person["height"]}`);

//adding new properties to the objects
person.gender = "Male";
person.occupation = "Software Developer";
console.log(`\nAll properties of the object: `);
console.log(person);

//deleting properties from the object
delete person.height;
console.log('\nAll properties of the object after deletion: ')
console.log(person);

// modifying existing properties
person.name = "Yona Sanchz"
console.log('\nAll properties of the object after modification: ')
console.log(person);

//assinging the propertie of the objest to a variable
const personName = person.name;
console.log("\nPerson Name: ", personName);

// assinging the propertie of the objest to a variable with Destructing
const { occupation } = person;
console.log("Person occupation with destructing: ", occupation);