'use strict';

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    this.calcAge = function(){
        console.log(2037 - this.birthYear);
    }
}
const levi = new Person(`Levi`, 1998);
console.log(levi);

// 1. New obj created
// 2. Function is called, this = new obj
// 3. new obj linked to prototype
// 4. function automatically return the new obj

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
console.log(matilda, jack);

// const jay = `Jay`;
console.log(levi instanceof Person);
// console.log(jay instanceof Person);


// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

levi.calcAge();
matilda.calcAge();

console.log(levi.__proto__);
console.log(levi.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(levi));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(levi);

Person.prototype.species = `Homo Sapiens`;
console.log(levi, matilda);
console.log(levi.species);

console.log(levi.hasOwnProperty(`firstName`));
console.log(levi.hasOwnProperty(`species`));