

// Now let's do more things with arrow functions

// -----------------------------------------------------
// 1) Passing arguments to an arrow function
const greetMessage = (name) => console.log(`hello ${name}`);
// calling with an argument
greetMessage("krishna");
// NOTE: Arrow functions don’t have their own `this` or `arguments`.

// -----------------------------------------------------
// 2) Passing multiple arguments (different types) to an arrow function
const bioData = (fname, age) => {
  console.log(`your name is ${fname} and your age is ${age}`);
};
// calling with two arguments
bioData("krishna", 25);

// -----------------------------------------------------