//console.log('Welcome to Hello world');

// WAY 1
//const greet = require("./greet");
//console.log('way 1', greet.GreetUser() );

// WAY 2
//const { GreetUser } = require("./greet");
//console.log('way 2', GreetUser() );

// WAY 3
const { displayMessage } = require("./greet");
console.log('way 3', displayMessage('John Doe') );
