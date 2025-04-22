import { 
  validateAddition, 
  validateMaximum, 
  validateStringReverse, 
  validateIsPrime,
  validateCountVowels,
  validateFactorial,
  validateIsPalindrome,
  validateFibonacci,
  validateGenerateEvenNumbers,
  validateMergeSortedArrays,
  type ProgrammingLanguage 
} from '../lib/codeValidator';

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
  },
  isPrime: {
    en: {
      title: "Write a function that checks if a number is prime",
      description: "Create a function named 'isPrime' that takes a number parameter 'n' and returns true if the number is prime, false otherwise.",
      lesson: "This challenge introduces the concept of prime numbers and divisibility testing. A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. To determine if a number is prime, you need to check if it has any divisors other than 1 and itself. This requires using loops, modulo operations, and breaking early from loops for efficiency."
    },
    es: {
      title: "Escribe una función que compruebe si un número es primo",
      description: "Crea una función llamada 'isPrime' que tome un parámetro número 'n' y devuelva true si el número es primo, false en caso contrario.",
      lesson: "Este desafío introduce el concepto de números primos y pruebas de divisibilidad. Un número primo es un número natural mayor que 1 que no puede formarse multiplicando dos números naturales más pequeños. Para determinar si un número es primo, debes verificar si tiene algún divisor aparte de 1 y sí mismo. Esto requiere usar bucles, operaciones de módulo y salir anticipadamente de los bucles para mayor eficiencia."
    },
    difficulty: 'intermediate',
    validator: validateIsPrime,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction isPrime(n) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef isPrime(n):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  countVowels: {
    en: {
      title: "Write a function that counts vowels in a string",
      description: "Create a function named 'countVowels' that takes a string parameter 's' and returns the number of vowels (a, e, i, o, u) in the string.",
      lesson: "This challenge focuses on string processing and character checking. You'll need to iterate through each character in the string and check if it's a vowel. This involves using loops, conditional statements, and potentially regular expressions or sets. It also introduces the concept of case-insensitive comparison, as vowels can be uppercase or lowercase."
    },
    es: {
      title: "Escribe una función que cuente las vocales en una cadena",
      description: "Crea una función llamada 'countVowels' que tome un parámetro string 's' y devuelva el número de vocales (a, e, i, o, u) en la cadena.",
      lesson: "Este desafío se centra en el procesamiento de cadenas y la verificación de caracteres. Necesitarás iterar a través de cada carácter en la cadena y verificar si es una vocal. Esto implica usar bucles, declaraciones condicionales y potencialmente expresiones regulares o conjuntos. También introduce el concepto de comparación insensible a mayúsculas y minúsculas, ya que las vocales pueden estar en mayúsculas o minúsculas."
    },
    difficulty: 'beginner',
    validator: validateCountVowels,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction countVowels(s) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef countVowels(s):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  factorial: {
    en: {
      title: "Write a function that calculates the factorial of a number",
      description: "Create a function named 'factorial' that takes a non-negative integer 'n' and returns its factorial (n!).",
      lesson: "This challenge introduces the mathematical concept of factorials and recursive thinking. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. There are several approaches to implement this: using recursion (a function that calls itself), using iterative loops, or using mathematical libraries. This is also an opportunity to handle edge cases properly (0! = 1)."
    },
    es: {
      title: "Escribe una función que calcule el factorial de un número",
      description: "Crea una función llamada 'factorial' que tome un entero no negativo 'n' y devuelva su factorial (n!).",
      lesson: "Este desafío introduce el concepto matemático de factoriales y el pensamiento recursivo. El factorial de un entero no negativo n es el producto de todos los enteros positivos menores o iguales a n. Hay varios enfoques para implementar esto: usando recursión (una función que se llama a sí misma), usando bucles iterativos o usando bibliotecas matemáticas. Esta es también una oportunidad para manejar casos especiales correctamente (0! = 1)."
    },
    difficulty: 'intermediate',
    validator: validateFactorial,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction factorial(n) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef factorial(n):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  isPalindrome: {
    en: {
      title: "Write a function that checks if a string is a palindrome",
      description: "Create a function named 'isPalindrome' that takes a string parameter 's' and returns true if it's a palindrome, false otherwise. A palindrome reads the same backward as forward (ignoring spaces and capitalization).",
      lesson: "This challenge combines string manipulation, character comparison, and conditional logic. A palindrome is a word, sentence, or sequence that reads the same backward as forward. To check if a string is a palindrome, you need to normalize the string (removing spaces, punctuation, and converting to lowercase), then compare characters from the beginning and end moving inward, or reverse the string and compare. This challenge teaches string normalization, string comparison, and different approaches to the same problem."
    },
    es: {
      title: "Escribe una función que verifique si una cadena es un palíndromo",
      description: "Crea una función llamada 'isPalindrome' que tome un parámetro string 's' y devuelva true si es un palíndromo, false en caso contrario. Un palíndromo se lee igual de atrás hacia adelante que de adelante hacia atrás (ignorando espacios y mayúsculas).",
      lesson: "Este desafío combina manipulación de cadenas, comparación de caracteres y lógica condicional. Un palíndromo es una palabra, frase o secuencia que se lee igual hacia atrás que hacia adelante. Para verificar si una cadena es un palíndromo, necesitas normalizar la cadena (eliminar espacios, puntuación y convertir a minúsculas), luego comparar caracteres desde el principio y el final moviéndote hacia adentro, o invertir la cadena y comparar. Este desafío enseña normalización de cadenas, comparación de cadenas y diferentes enfoques para el mismo problema."
    },
    difficulty: 'intermediate',
    validator: validateIsPalindrome,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction isPalindrome(s) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef isPalindrome(s):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  fibonacci: {
    en: {
      title: "Write a function that returns the nth Fibonacci number",
      description: "Create a function named 'fibonacci' that takes a non-negative integer 'n' and returns the nth Fibonacci number.",
      lesson: "This challenge introduces the famous Fibonacci sequence and explores different algorithmic approaches. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. This problem can be solved using recursion, but a more efficient approach uses iteration or dynamic programming. This teaches you about algorithm efficiency, as recursive solutions can be inefficient for large values of n."
    },
    es: {
      title: "Escribe una función que devuelva el enésimo número de Fibonacci",
      description: "Crea una función llamada 'fibonacci' que tome un entero no negativo 'n' y devuelva el enésimo número de Fibonacci.",
      lesson: "Este desafío introduce la famosa secuencia de Fibonacci y explora diferentes enfoques algorítmicos. La secuencia de Fibonacci es una serie de números donde cada número es la suma de los dos anteriores, comenzando desde 0 y 1. Este problema puede resolverse usando recursión, pero un enfoque más eficiente utiliza iteración o programación dinámica. Esto te enseña sobre la eficiencia de los algoritmos, ya que las soluciones recursivas pueden ser ineficientes para valores grandes de n."
    },
    difficulty: 'advanced',
    validator: validateFibonacci,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction fibonacci(n) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef fibonacci(n):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  generateEvenNumbers: {
    en: {
      title: "Write a function that generates even numbers",
      description: "Create a function named 'generateEvenNumbers' that takes a parameter 'n' and returns an array containing the first n even numbers starting from 0.",
      lesson: "This challenge focuses on array/list generation, iteration, and understanding even numbers. You'll need to create a collection of numbers that satisfy a condition (being even), which introduces concepts like array building, loops, and the modulo operator. This teaches you how to generate sequences based on specific rules and how to efficiently build arrays."
    },
    es: {
      title: "Escribe una función que genere números pares",
      description: "Crea una función llamada 'generateEvenNumbers' que tome un parámetro 'n' y devuelva un array con los primeros n números pares comenzando desde 0.",
      lesson: "Este desafío se centra en la generación de arrays/listas, iteración y comprensión de números pares. Necesitarás crear una colección de números que satisfagan una condición (ser pares), lo que introduce conceptos como construcción de arrays, bucles y el operador módulo. Esto te enseña cómo generar secuencias basadas en reglas específicas y cómo construir arrays de manera eficiente."
    },
    difficulty: 'beginner',
    validator: validateGenerateEvenNumbers,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction generateEvenNumbers(n) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef generateEvenNumbers(n):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  },
  mergeSortedArrays: {
    en: {
      title: "Write a function that merges two sorted arrays",
      description: "Create a function named 'mergeSortedArrays' that takes two sorted arrays as parameters and returns a new sorted array containing all the elements from both input arrays.",
      lesson: "This challenge introduces the concept of merging and sorting data structures. The key insight is that when two arrays are already sorted, they can be combined more efficiently than sorting the combined array from scratch. This teaches efficient algorithm design, comparison operations, and managing multiple pointers or indices. The technique is also a key component of the merge sort algorithm, an efficient sorting method."
    },
    es: {
      title: "Escribe una función que combine dos arrays ordenados",
      description: "Crea una función llamada 'mergeSortedArrays' que tome dos arrays ordenados como parámetros y devuelva un nuevo array ordenado que contenga todos los elementos de ambos arrays de entrada.",
      lesson: "Este desafío introduce el concepto de combinar y ordenar estructuras de datos. La idea clave es que cuando dos arrays ya están ordenados, pueden combinarse de manera más eficiente que ordenar el array combinado desde cero. Esto enseña diseño eficiente de algoritmos, operaciones de comparación y manejo de múltiples punteros o índices. La técnica también es un componente clave del algoritmo de ordenamiento por fusión (merge sort), un método de ordenamiento eficiente."
    },
    difficulty: 'advanced',
    validator: validateMergeSortedArrays,
    defaultCode: {
      javascript: "// Write your function here\n// Escribe tu función aquí\nfunction mergeSortedArrays(arr1, arr2) {\n  // Your code here\n  // Tu código aquí\n}",
      python: "# Write your function here\n# Escribe tu función aquí\ndef mergeSortedArrays(arr1, arr2):\n    # Your code here\n    # Tu código aquí\n    pass"
    }
  }
};
