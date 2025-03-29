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
  nextChallengeButton: string;
  languageSelectLabel: string;
  progLangSelectJS: string;
  progLangSelectPython: string;
  completedChallengesLabel: string;
  noMoreChallenges: string;
}

export const translations: Record<LanguageKey, Translations> = {
  en: {
    challengeTitle: "Coding Challenge",
    codeEditorTitle: "Your Solution",
    languageIndicator: "Language",
    exampleHeader: "Example:",
    exampleTest: "Input:",
    exampleResult: "Output:",
    submitButton: "Submit Solution",
    successTitle: "Great job!",
    successMessage: "Your solution works correctly!",
    errorTitle: "Not quite right",
    errorMessage: "Your solution doesn't work correctly. Try again!",
    footerText: "TranslaCode - Learn coding in multiple languages",
    nextChallengeButton: "Next Challenge",
    languageSelectLabel: "Programming Language:",
    progLangSelectJS: "JavaScript",
    progLangSelectPython: "Python",
    completedChallengesLabel: "Completed Challenges:",
    noMoreChallenges: "You've completed all challenges! Great work!"
  },
  es: {
    challengeTitle: "Desafío de Programación",
    codeEditorTitle: "Tu Solución",
    languageIndicator: "Lenguaje",
    exampleHeader: "Ejemplo:",
    exampleTest: "Entrada:",
    exampleResult: "Salida:",
    submitButton: "Enviar Solución",
    successTitle: "¡Buen trabajo!",
    successMessage: "¡Tu solución funciona correctamente!",
    errorTitle: "No está del todo bien",
    errorMessage: "Tu solución no funciona correctamente. ¡Inténtalo de nuevo!",
    footerText: "TranslaCode - Aprende programación en varios idiomas",
    nextChallengeButton: "Siguiente Desafío",
    languageSelectLabel: "Lenguaje de Programación:",
    progLangSelectJS: "JavaScript",
    progLangSelectPython: "Python",
    completedChallengesLabel: "Desafíos Completados:",
    noMoreChallenges: "¡Has completado todos los desafíos! ¡Excelente trabajo!"
  }
};
