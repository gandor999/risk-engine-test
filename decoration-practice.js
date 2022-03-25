const greeting = (name) => {
  console.log(`Hello ${name}`);
};

// please don't mind this comment

function greetingDecorator(greeting) {
  // pass in the function that we want to decorate
  return function (name) {
    // this will become the main paramter of the decorated greeting
    greeting.call(this, name); // we can call the original greeting function here

    // we can put a lot of stuff here on top of the greeting function
    console.log(`This is the extra message from the decorated function`);
    greeting.call(this, "Jem"); // we can even call the origina function again
  };
}

const decoratedGreeting = greetingDecorator(greeting); // this variable essentially becomes a whole new function altogether

console.log(decoratedGreeting("Geo"));

const add = (num1, num2) => {
  return num1 + num2;
};

// alternate branch comment
// add another comment for alternate branch

module.exports = add;
