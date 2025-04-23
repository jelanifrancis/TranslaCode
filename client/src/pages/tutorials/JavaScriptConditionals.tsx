import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptConditionals() {
  return (
    <Tutorial
      title="Conditionals in JavaScript"
      concept="Core Concept"
      objective="Master decision-making in your code with if, else if, and else statements."
      explanation={`Conditional statements allow your programs to make decisions based on certain conditions. They execute different blocks of code depending on whether a condition is true or false.

JavaScript uses if, else if, and else keywords for conditional logic. The condition after if or else if is evaluated, and if it's true, the code block within curly braces runs. If it's false, JavaScript moves to the next condition.

Conditions typically use comparison operators like === (strict equal), !== (strict not equal), == (loose equal), != (loose not equal), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to). You can also combine conditions with logical operators like && (and), || (or), and ! (not).`}
      language="javascript"
      examples={[
        {
          code: `// Basic if statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
    
// Outputs: You are an adult.

// if-else statement
let temperature = 15;

if (temperature > 25) {
    console.log("It's a hot day.");
} else {
    console.log("It's not hot today.");
}
    
// Outputs: It's not hot today.

// if-else if-else statement
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
    
// Outputs: Grade: B

// Combining conditions with logical operators
let isSunny = true;
let isWeekend = false;

if (isSunny && isWeekend) {
    console.log("Perfect day for the beach!");
} else if (isSunny && !isWeekend) {
    console.log("Nice day, but I have to work.");
} else if (!isSunny && isWeekend) {
    console.log("At least I can relax indoors.");
} else {
    console.log("Ordinary work day.");
}
    
// Outputs: Nice day, but I have to work.

// Ternary operator (shorthand for simple conditions)
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // Outputs: adult`,
          explanation: "This example demonstrates different conditional structures in JavaScript, from simple if statements to complex conditions with multiple branches, logical operators, and the ternary operator shorthand."
        }
      ]}
    />
  );
}