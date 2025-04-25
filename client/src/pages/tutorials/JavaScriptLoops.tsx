import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptLoops() {
  return (
    <Tutorial
      title={{
        en: "Loops in JavaScript",
        es: "Bucles en JavaScript",
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave",
      }}
      objective={{
        en: "Explore how to repeat actions efficiently with for, while, and do-while loops.",
        es: "Explora cómo repetir acciones de manera eficiente con bucles for, while y do-while.",
      }}
      explanation={{
        en: `Loops are used to repeat a block of code multiple times. They're essential for processing collections of data, performing repeated calculations, or continuing actions until a certain condition is met.

JavaScript has several types of loops: for loops, while loops, do-while loops, and enhanced for...of and for...in loops. A for loop runs a specific number of times based on a counter. A while loop continues as long as a specified condition remains true. A do-while loop is similar to a while loop, but it always executes the code block at least once.

Using loops can dramatically reduce code duplication and make your programs more efficient and readable. Different loop types serve different purposes, giving you flexibility in how you implement repetition in your code.`,
        es: `Los bucles se utilizan para repetir un bloque de código múltiples veces. Son esenciales para procesar colecciones de datos, realizar cálculos repetidos o continuar acciones hasta que se cumpla una condición determinada.

JavaScript tiene varios tipos de bucles: bucles for, bucles while, bucles do-while, y los bucles mejorados for...of y for...in. Un bucle for se ejecuta un número específico de veces basado en un contador. Un bucle while continúa mientras una condición especificada siga siendo verdadera. Un bucle do-while es similar a un while, pero siempre ejecuta el bloque de código al menos una vez.

Utilizar bucles puede reducir drásticamente la duplicación de código y hacer que tus programas sean más eficientes y legibles. Diferentes tipos de bucles sirven para diferentes propósitos, brindándote flexibilidad en cómo implementar la repetición en tu código.`
      }}
      language="javascript"
      examples={[
        {
          code: `// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
    
// Outputs:
// 0
// 1
// 2
// 3
// 4

// For loop with an array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
    
// Outputs:
// apple
// banana
// cherry

// Modern for...of loop (for iterables like arrays)
for (const fruit of fruits) {
    console.log(fruit);
}
    
// Outputs:
// apple
// banana
// cherry

// For...in loop (for object properties)
const person = { name: "John", age: 30, job: "developer" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}
    
// Outputs:
// name: John
// age: 30
// job: developer

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
    
// Outputs:
// 0
// 1
// 2
// 3
// 4

// Do-while loop (runs at least once)
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
    
// Outputs:
// 0
// 1
// 2

// Break statement to exit a loop early
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
    
// Outputs:
// 0
// 1
// 2
// 3
// 4

// Continue statement to skip to the next iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {  // Skip even numbers
        continue;
    }
    console.log(i);
}
    
// Outputs:
// 1
// 3
// 5
// 7
// 9`,
          explanation: {
            en: "This example showcases different types of loops in JavaScript, including traditional for loops, modern for...of and for...in loops, while loops, do-while loops, and how to control loop flow with break and continue statements.",
            es: "Este ejemplo muestra diferentes tipos de bucles en JavaScript, incluyendo bucles for tradicionales, bucles modernos for...of y for...in, bucles while, bucles do-while, y cómo controlar el flujo de los bucles usando las instrucciones break y continue."
          }
        }
      ]}
    />
  );
}