import { validateAddition, validateMaximum, validateStringReverse, type ProgrammingLanguage } from '../lib/codeValidator';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Challenge {
  title: string;
  description: string;
  lesson: string; // Educational content about the programming concept
}

export interface ChallengeData {
  en: Challenge;
  es: Challenge;
  difficulty: DifficultyLevel;
  validator: (code: string, language: ProgrammingLanguage) => boolean;
  defaultCode: Record<ProgrammingLanguage, string>;
}

export const challenges: Record<string, ChallengeData> = {
  addNumbers: {
    en: {
      title: "Write a function that adds two numbers",
      description: "Create a function named 'sum' that takes two parameters 'a' and 'b' and returns their sum.",
      lesson: "This challenge introduces the basic concept of functions. A function is a reusable block of code that performs a specific task. In this case, the function 'sum' takes two input parameters and returns their sum. Functions help organize code, make it reusable, and improve maintainability. Parameters are variables that receive values when the function is called."
    },
    es: {
      title: "Escribe una función que sume dos números",
      description: "Crea una función llamada 'sum' que tome dos parámetros 'a' y 'b' y devuelva su suma.",
      lesson: "Este desafío introduce el concepto básico de funciones. Una función es un bloque de código reutilizable que realiza una tarea específica. En este caso, la función 'sum' toma dos parámetros de entrada y devuelve su suma. Las funciones ayudan a organizar el código, hacerlo reutilizable y mejorar su mantenimiento. Los parámetros son variables que reciben valores cuando se llama a la función."
    },
    difficulty: 'beginner',
    validator: validateAddition,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction sum(a, b) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef sum(a, b):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  findMaximum: {
    en: {
      title: "Write a function that finds the maximum of three numbers",
      description: "Create a function named 'findMax' that takes three parameters 'a', 'b', and 'c' and returns the maximum value.",
      lesson: "This challenge teaches you about comparison operations and decision making. To find the maximum value, you need to compare numbers and determine which is largest. This introduces conditional statements (if/else) and logical operators. There are multiple approaches: using Math.max() in JavaScript or max() in Python, or by writing your own comparison logic with if statements to determine the largest value."
    },
    es: {
      title: "Escribe una función que encuentre el máximo de tres números",
      description: "Crea una función llamada 'findMax' que tome tres parámetros 'a', 'b' y 'c' y devuelva el valor máximo.",
      lesson: "Este desafío te enseña sobre operaciones de comparación y toma de decisiones. Para encontrar el valor máximo, necesitas comparar números y determinar cuál es el más grande. Esto introduce declaraciones condicionales (if/else) y operadores lógicos. Hay múltiples enfoques: usar Math.max() en JavaScript o max() en Python, o escribir tu propia lógica de comparación con declaraciones if para determinar el valor más grande."
    },
    difficulty: 'beginner',
    validator: validateMaximum,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction findMax(a, b, c) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef findMax(a, b, c):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  reverseString: {
    en: {
      title: "Write a function that reverses a string",
      description: "Create a function named 'reverseString' that takes a string parameter 's' and returns the string reversed.",
      lesson: "This challenge introduces string manipulation, a fundamental concept in programming. Strings are sequences of characters, and they can be manipulated in various ways. To reverse a string, you need to know how to access individual characters, iterate through the string, and build a new string in reverse order. In JavaScript, you might use methods like split(), reverse(), and join(), or a for loop. In Python, you can use string slicing with a negative step (s[::-1]), or loop techniques."
    },
    es: {
      title: "Escribe una función que invierta una cadena de texto",
      description: "Crea una función llamada 'reverseString' que tome un parámetro string 's' y devuelva la cadena invertida.",
      lesson: "Este desafío introduce la manipulación de cadenas de texto, un concepto fundamental en programación. Las cadenas son secuencias de caracteres que pueden manipularse de varias formas. Para invertir una cadena, necesitas saber cómo acceder a caracteres individuales, iterar a través de la cadena y construir una nueva cadena en orden inverso. En JavaScript, podrías usar métodos como split(), reverse() y join(), o un bucle for. En Python, puedes usar rebanado de cadenas con un paso negativo (s[::-1]), o técnicas de bucle."
    },
    difficulty: 'intermediate',
    validator: validateStringReverse,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction reverseString(s) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef reverseString(s):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  }
};
