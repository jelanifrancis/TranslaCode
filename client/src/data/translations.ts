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
  lessonHeader: string;
  libraryButton: string;
  libraryTitle: string;
  libraryDescription: string;
  selectChallengeButton: string;
  backToCurrentButton: string;
  difficultyLabel: string;
  difficultyBeginner: string;
  difficultyIntermediate: string;
  difficultyAdvanced: string;
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
    noMoreChallenges: "You've completed all challenges! Great work!",
    lessonHeader: "Learning Lesson:",
    libraryButton: "Challenge Library",
    libraryTitle: "Challenge Library",
    libraryDescription: "Choose from our collection of coding challenges to practice your skills:",
    selectChallengeButton: "Select Challenge",
    backToCurrentButton: "Back to Current Challenge",
    difficultyLabel: "Difficulty:",
    difficultyBeginner: "Beginner",
    difficultyIntermediate: "Intermediate",
    difficultyAdvanced: "Advanced"
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
    noMoreChallenges: "¡Has completado todos los desafíos! ¡Excelente trabajo!",
    lessonHeader: "Lección de Aprendizaje:",
    libraryButton: "Biblioteca de Desafíos",
    libraryTitle: "Biblioteca de Desafíos",
    libraryDescription: "Elige entre nuestra colección de desafíos de programación para practicar tus habilidades:",
    selectChallengeButton: "Seleccionar Desafío",
    backToCurrentButton: "Volver al Desafío Actual",
    difficultyLabel: "Dificultad:",
    difficultyBeginner: "Principiante",
    difficultyIntermediate: "Intermedio",
    difficultyAdvanced: "Avanzado"
  }
};
