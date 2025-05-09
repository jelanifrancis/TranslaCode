import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptArrays() {
  return (
    <Tutorial
      title={{
        en: "Arrays in JavaScript",
        es: "Arreglos en JavaScript"
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave"
      }}
      objective={{
        en: "Learn to store collections of items in organized, indexed arrays.",
        es: "Aprende a almacenar colecciones de elementos en arreglos organizados e indexados."
      }}
      explanation={{
        en: `Arrays are one of JavaScript's core data structures. They allow you to store multiple values in a single variable.

Arrays are ordered (items have a specific order), mutable (can be changed after creation), and can contain values of different data types. In JavaScript, arrays are created using square brackets [ ], with items separated by commas. Each item in an array has an index, starting from 0 for the first item.

You can access, add, remove, or modify array items using these indices. JavaScript provides many built-in methods to manipulate arrays efficiently, including modern functional programming methods.`,
        es: `Los arreglos son una de las estructuras de datos principales en JavaScript. Permiten almacenar múltiples valores en una sola variable.

Los arreglos son ordenados (los elementos tienen un orden específico), mutables (se pueden cambiar después de ser creados) y pueden contener valores de diferentes tipos de datos. En JavaScript, los arreglos se crean utilizando corchetes [ ], con los elementos separados por comas. Cada elemento tiene un índice, comenzando desde 0 para el primer elemento.

Puedes acceder, agregar, eliminar o modificar elementos del arreglo usando sus índices. JavaScript proporciona muchos métodos integrados para manipular arreglos de manera eficiente, incluyendo métodos modernos de programación funcional.`
      }}
      language="javascript"
      examples={[
        {
          code: `// Creating arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, 3.14];

// Accessing array items
console.log(fruits[0]);        // "apple"
console.log(fruits[1]);        // "banana"
console.log(fruits[fruits.length - 1]);  // "cherry"

// Slicing arrays
console.log(numbers.slice(1, 4));  // [2, 3, 4]
console.log(numbers.slice(0, 3));  // [1, 2, 3]
console.log(numbers.slice(2));     // [3, 4, 5]

// Modifying arrays
fruits[1] = "orange";
console.log(fruits);  // ['apple', 'orange', 'cherry']

// Adding items
fruits.push("kiwi");
fruits.unshift("mango");
fruits.splice(2, 0, "grape");

// Removing items
fruits.pop();
fruits.shift();
fruits.splice(1, 1);

// Combining arrays
const combined = fruits.concat(numbers);

// Checking for items
console.log(fruits.includes("apple"));
console.log(fruits.indexOf("banana"));  // -1

// Looping and transformation
fruits.forEach(fruit => console.log(fruit));
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
const filtered = numbers.filter(num => num > 2);
const sum = numbers.reduce((total, num) => total + num, 0);

// Sorting
const sortedNumbers = [...numbers].sort((a, b) => b - a);`,
          explanation: {
            en: "This example shows how to create and manipulate arrays in JavaScript using both traditional techniques and modern methods like map, filter, and reduce.",
            es: "Este ejemplo muestra cómo crear y manipular arreglos en JavaScript usando tanto técnicas tradicionales como métodos modernos como map, filter y reduce."
          }
        }
      ]}
    />
  );
}