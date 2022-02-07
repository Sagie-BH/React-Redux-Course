// let & const
var variable = "Somthing";
let letVar = "Can be modified";
const constVar ="Can't be Change";

// Arrow Functions
function printNameAndAgeFunc(name, age) {
    console.log(name + " " + age);
}
const printNameAndAge = (name, age) => {
    console.log(name + " " + age);
}
let printOnlyName = (name) => {
    console.log(name);
}

// Classes
//ES6
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}
//ES7
class Person extends Human {
    name = 'Anat';
    printName = () => console.log(this.name)
}

const person = new Person();
person.printName();

// Spread & Rest Operators - ...
// Spread - Used to split up array elements or object properties
const oldArray = [1, 2, 3]
const newArray = [...oldArray, 3, 4];
console.log("New array:\t" + newArray)

const oldObject = {name: 'Josh'}
const newObject = {...oldObject, newProp: 5}
console.log(oldObject);
console.log(newObject);

// Rest - Used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(el => el === 1);  // === checks for value ane type
}
console.log("Filtered list:\t" + filter(1,2,3));

const employee = {
    name: 'Ezra'
}
const newEmployee = {
    ...employee,
    age: 30
}
console.log(newEmployee)