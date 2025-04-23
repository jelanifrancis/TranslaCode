import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptFunctions() {
  return (
    <Tutorial
      title="Functions in JavaScript"
      concept="Core Concept"
      objective="Learn how to create reusable blocks of code with JavaScript functions."
      explanation={`Functions are reusable blocks of code that perform specific tasks. They help organize your code, avoid repetition, and make your programs more modular and easier to understand.

In JavaScript, there are several ways to define functions. The traditional way uses the function keyword, but modern JavaScript also allows arrow functions (=>). Functions can be named or anonymous.

Functions can take inputs (parameters), process them, and return outputs using the return statement. They can be called multiple times from different parts of your program, making your code more efficient and maintainable.`}
      language="javascript"
      examples={[
        {
          code: `// Traditional function declaration
function greet() {
    console.log("Hello, world!");
}
    
// Calling the function
greet();  // Outputs: Hello, world!

// Function with parameters
function personalGreeting(name) {
    console.log("Hello, " + name + "!");
}
    
personalGreeting("Alice");  // Outputs: Hello, Alice!
personalGreeting("Bob");    // Outputs: Hello, Bob!

// Function with return value
function add(a, b) {
    return a + b;
}
    
const result = add(5, 3);
console.log(result);  // Outputs: 8

// Function with default parameter
function greetWithTitle(name, title = "Mr.") {
    console.log("Hello, " + title + " " + name + "!");
}
    
greetWithTitle("Smith");           // Outputs: Hello, Mr. Smith!
greetWithTitle("Johnson", "Dr.");  // Outputs: Hello, Dr. Johnson!

// Arrow function (ES6+)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // Outputs: 20`,
          explanation: "This example shows different ways to create and use functions in JavaScript, including traditional functions, functions with parameters, with return values, with default parameters, and modern arrow functions."
        }
      ]}
    />
  );
}