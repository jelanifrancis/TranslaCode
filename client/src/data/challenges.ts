import { validateAddition, validateMaximum, validateStringReverse, type ProgrammingLanguage } from '../lib/codeValidator';

export interface Challenge {
  title: string;
  description: string;
}

export interface ChallengeData {
  en: Challenge;
  es: Challenge;
  validator: (code: string, language: ProgrammingLanguage) => boolean;
  defaultCode: Record<ProgrammingLanguage, string>;
}

export const challenges: Record<string, ChallengeData> = {
  addNumbers: {
    en: {
      title: "Write a function that adds two numbers",
      description: "Create a function named 'sum' that takes two parameters 'a' and 'b' and returns their sum."
    },
    es: {
      title: "Escribe una función que sume dos números",
      description: "Crea una función llamada 'sum' que tome dos parámetros 'a' y 'b' y devuelva su suma."
    },
    validator: validateAddition,
    defaultCode: {
      javascript: "// Write your function here\nfunction sum(a, b) {\n  // Your code here\n}",
      python: "# Write your function here\ndef sum(a, b):\n    # Your code here\n    pass"
    }
  },
  findMaximum: {
    en: {
      title: "Write a function that finds the maximum of three numbers",
      description: "Create a function named 'findMax' that takes three parameters 'a', 'b', and 'c' and returns the maximum value."
    },
    es: {
      title: "Escribe una función que encuentre el máximo de tres números",
      description: "Crea una función llamada 'findMax' que tome tres parámetros 'a', 'b' y 'c' y devuelva el valor máximo."
    },
    validator: validateMaximum,
    defaultCode: {
      javascript: "// Write your function here\nfunction findMax(a, b, c) {\n  // Your code here\n}",
      python: "# Write your function here\ndef findMax(a, b, c):\n    # Your code here\n    pass"
    }
  },
  reverseString: {
    en: {
      title: "Write a function that reverses a string",
      description: "Create a function named 'reverseString' that takes a string parameter 's' and returns the string reversed."
    },
    es: {
      title: "Escribe una función que invierta una cadena de texto",
      description: "Crea una función llamada 'reverseString' que tome un parámetro string 's' y devuelva la cadena invertida."
    },
    validator: validateStringReverse,
    defaultCode: {
      javascript: "// Write your function here\nfunction reverseString(s) {\n  // Your code here\n}",
      python: "# Write your function here\ndef reverseString(s):\n    # Your code here\n    pass"
    }
  }
};
