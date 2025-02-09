function Greet() {
  return `Welcome to the world of Node.js`;
}

// WAY 1
// module.exports = Greet;

// WAY 2
// module.exports = {
//   GreetUser : Greet
// };

// WAY 3
exports.displayMessage = (name) => 'Welcome, ' + name;
