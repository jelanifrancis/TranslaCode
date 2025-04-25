import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptConditionals() {
  return (
    <Tutorial
      title={{
        en: "Conditionals in JavaScript",
        es: "Condicionales en JavaScript",
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave",
      }}
      objective={{
        en: "Master decision-making in your code with if, else if, and else statements.",
        es: "Domina la toma de decisiones en tu código usando las instrucciones if, else if y else.",
      }}
      explanation={{
        en: `Conditional statements allow your programs to make decisions based on certain conditions. They execute different blocks of code depending on whether a condition is true or false.

JavaScript uses if, else if, and else keywords for conditional logic. The condition after if or else if is evaluated, and if it's true, the code block within curly braces runs. If it's false, JavaScript moves to the next condition.

Conditions typically use comparison operators like === (strict equal), !== (strict not equal), == (loose equal), != (loose not equal), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to). You can also combine conditions with logical operators like && (and), || (or), and ! (not).`,
        es: `Las sentencias condicionales permiten que tus programas tomen decisiones basadas en ciertas condiciones. Ejecutan diferentes bloques de código dependiendo de si una condición es verdadera o falsa.

JavaScript utiliza las palabras clave if, else if y else para la lógica condicional. La condición después de if o else if se evalúa, y si es verdadera, se ejecuta el bloque de código dentro de las llaves. Si es falsa, JavaScript pasa a la siguiente condición.

Las condiciones generalmente usan operadores de comparación como === (igual estricto), !== (diferente estricto), == (igual no estricto), != (diferente no estricto), > (mayor que), < (menor que), >= (mayor o igual que), y <= (menor o igual que). También puedes combinar condiciones usando operadores lógicos como && (y), || (o) y ! (no).`
      }}
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
          explanation: {
            en: "This example demonstrates different conditional structures in JavaScript, from simple if statements to complex conditions with multiple branches, logical operators, and the ternary operator shorthand.",
            es: "Este ejemplo demuestra diferentes estructuras condicionales en JavaScript, desde sentencias if simples hasta condiciones complejas con múltiples ramas, operadores lógicos y el operador ternario como forma abreviada."
          }
        }
      ]}
    />
  );
}