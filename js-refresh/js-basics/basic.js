// Traversy Media - YouTube

var name = 'Sagie';

var age = 33;

var name = 'ss';

const age2 = 5;

let name2 = 'Josh';

const numbers = [1, 2, 3, 4, 5];

const object = {
    name: 'Dana',
    colors: ['red', 'blue']
};

numbers[3] = 8;

numbers.push(6);

object.color = 'grey';

// LOOPS

// For
for (let i = 0; i <= 10; i++) {
    // console.log(`For Loop Number: ${name2}`);
    let onlyForThisBlock = i;
}

// While
let i = 0
while (i <= 10) {
    //   console.log(`While Loop Number: ${i}`);
    i++;
}

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: false
    },
    {
        id: 2,
        text: 'Dinner with wife',
        isComplete: false
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isComplete: true
    }
];

// Get specific object value
console.log(todos[1].text);


// High Order Functions

todos.forEach(function (todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function (todo) {
    return todo.text;
});

// filter() - Returns array based on condition
const todo1 = todos.filter(function (todo) {
    // Return only todos where id is 1
    return todo.id === 1;
});

// Conditions
// If Else
if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10')
}

const z = color === 'red' ? 10 : 20;

// Switch
color = 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
    case 'blue':
        console.log('color is blue');
    default:
        console.log('color is not red or blue')
}

// FUNCTIONS
const greet = (greeting = 'Hello', name) => {
    if (!name) {
        // console.log(greeting);
        return greeting;
    } else {
        // console.log(`${greeting} ${name}`);
        return `${greeting} ${name}`;
    }
}

function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

class PersonES6 {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
}

class PersonES7 {
      firstName = firstName;
      lastName = lastName;
      dob = new Date(dob);
}

// MANIPULATING THE DOM
const ul = document.getElementById('.item');
const btn = document.getElementsByClassName('.item'); // = []

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');

