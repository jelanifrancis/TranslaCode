import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptFunctions() {
  return (
    <Tutorial
      title={{
        en: "Functions in JavaScript",
        es: "Funciones en JavaScript",
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave",
      }}
      objective={{
        en: "Learn how to create reusable blocks of code with JavaScript functions.",
        es: "Aprende a crear bloques de código reutilizables con funciones en JavaScript.",
      }}
      explanation={{
        en: `Functions are reusable blocks of code that perform specific tasks. They help organize your code, avoid repetition, and make your programs more modular and easier to understand.

In JavaScript, there are several ways to define functions. The traditional way uses the function keyword, but modern JavaScript also allows arrow functions (=>). Functions can be named or anonymous.

Functions can take inputs (parameters), process them, and return outputs using the return statement. They can be called multiple times from different parts of your program, making your code more efficient and maintainable.`,
        es: `Las funciones son bloques de código reutilizables que realizan tareas específicas. Ayudan a organizar tu código, evitar repeticiones y hacer que tus programas sean más modulares y fáciles de entender.

En JavaScript, existen varias formas de definir funciones. La forma tradicional usa la palabra clave function, pero JavaScript moderno también permite el uso de funciones de flecha (=>). Las funciones pueden ser nombradas o anónimas.

Las funciones pueden recibir entradas (parámetros), procesarlas y devolver salidas utilizando la instrucción return. Pueden ser llamadas múltiples veces desde diferentes partes de tu programa, haciendo tu código más eficiente y mantenible.`
      }}
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
          explanation: {
            en: "This example shows different ways to create and use functions in JavaScript, including traditional functions, functions with parameters, with return values, with default parameters, and modern arrow functions.",
            es: "Este ejemplo muestra diferentes maneras de crear y usar funciones en JavaScript, incluyendo funciones tradicionales, funciones con parámetros, con valores de retorno, con parámetros por defecto y funciones de flecha modernas."
          }
        }
      ]}
    />
  );
}