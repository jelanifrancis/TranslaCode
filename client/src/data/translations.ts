export type LanguageKey = 'en' | 'es';

export interface Translations {
  challengeTitle: string;
  codeEditorTitle: string;
  languageIndicator: string;
  exampleHeader: string;
  exampleTest: string;
  exampleResult: string;
  submitButton: string;
  successTitle: string;
  successMessage: string;
  errorTitle: string;
  errorMessage: string;
  footerText: string;
}

export const translations: Record<LanguageKey, Translations> = {
  en: {
    challengeTitle: "Coding Challenge",
    codeEditorTitle: "Your Solution",
    languageIndicator: "JavaScript",
    exampleHeader: "Example:",
    exampleTest: "Input:",
    exampleResult: "Output:",
    submitButton: "Submit Solution",
    successTitle: "Great job!",
    successMessage: "Your solution works correctly. The function successfully adds two numbers together.",
    errorTitle: "Not quite right",
    errorMessage: "Your solution doesn't seem to correctly add the two numbers. Try again!",
    footerText: "TranslaCode - Learn coding in multiple languages"
  },
  es: {
    challengeTitle: "Desafío de Programación",
    codeEditorTitle: "Tu Solución",
    languageIndicator: "JavaScript",
    exampleHeader: "Ejemplo:",
    exampleTest: "Entrada:",
    exampleResult: "Salida:",
    submitButton: "Enviar Solución",
    successTitle: "¡Buen trabajo!",
    successMessage: "Tu solución funciona correctamente. La función suma dos números correctamente.",
    errorTitle: "No está del todo bien",
    errorMessage: "Tu solución no parece sumar correctamente los dos números. ¡Inténtalo de nuevo!",
    footerText: "TranslaCode - Aprende programación en varios idiomas"
  }
};
