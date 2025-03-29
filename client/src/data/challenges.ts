import { validateAddition } from '../lib/codeValidator';

export interface Challenge {
  title: string;
  description: string;
}

export interface ChallengeData {
  en: Challenge;
  es: Challenge;
  validator: (code: string) => boolean;
  defaultCode: string;
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
    defaultCode: "// Write your function here\nfunction sum(a, b) {\n  // Your code here\n}"
  }
};
