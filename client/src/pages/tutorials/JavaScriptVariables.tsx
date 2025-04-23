import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptVariables() {
  return (
    <Tutorial
      title={{
        en: "Variables in JavaScript",
        es: "Variables en JavaScript"
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Fundamental"
      }}
      objective={{
        en: "Learn how to store and manipulate data using variables in JavaScript.",
        es: "Aprende a almacenar y manipular datos usando variables en JavaScript."
      }}
      explanation={{
        en: `Variables are containers for storing data values in your programs. In JavaScript, we declare variables using keywords like var, let, or const, with let and const being the modern preferred way.

Think of variables like labeled boxes where you can put different types of information. You can later access or change what's inside the box by referring to its label (the variable name).

JavaScript variables can store different types of data, including numbers, text (strings), objects, arrays, and more. The let keyword allows you to update variables later, while const creates variables that cannot be reassigned.`,
        es: `Las variables son contenedores para almacenar valores de datos en tus programas. En JavaScript, declaramos variables usando palabras clave como var, let o const, siendo let y const la forma moderna preferida.

Piensa en las variables como cajas etiquetadas donde puedes colocar diferentes tipos de información. Más tarde puedes acceder o cambiar lo que hay dentro de la caja refiriéndote a su etiqueta (el nombre de la variable).

Las variables de JavaScript pueden almacenar diferentes tipos de datos, incluyendo números, texto (cadenas), objetos, arrays y más. La palabra clave let te permite actualizar variables más tarde, mientras que const crea variables que no pueden ser reasignadas.`
      }}
      language="javascript"
      examples={[
        {
          code: `// Declaring variables in JavaScript (Declarando variables en JavaScript)
let nombre = "Alex";  // A string variable (Una variable de texto)
let edad = 25;        // A number variable (Una variable numérica)
let altura = 1.75;    // Also a number variable (También una variable numérica)
let esEstudiante = true;  // A boolean variable (Una variable booleana)

// Using variables (Usando variables)
console.log(nombre);  // Outputs: Alex (Muestra: Alex)
console.log(edad);    // Outputs: 25 (Muestra: 25)

// You can change variables declared with 'let' (Puedes cambiar variables declaradas con 'let')
edad = 26;
console.log(edad);    // Outputs: 26 (Muestra: 26)

// Constants cannot be reassigned (Las constantes no pueden ser reasignadas)
const añoNacimiento = 1997;
console.log("Año de nacimiento:", añoNacimiento);  // Outputs: Año de nacimiento: 1997

// This would cause an error (Esto causaría un error):
// añoNacimiento = 1998;  // Error: Assignment to constant variable (Error: Asignación a variable constante)`,
          explanation: {
            en: "This example shows how to create variables with different data types using let and const, access their values, and modify them (except for constants).",
            es: "Este ejemplo muestra cómo crear variables con diferentes tipos de datos usando let y const, acceder a sus valores y modificarlos (excepto las constantes)."
          }
        }
      ]}
    />
  );
}