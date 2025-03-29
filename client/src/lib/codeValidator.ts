export type ProgrammingLanguage = 'javascript' | 'python';

/**
 * Validates a function that adds two numbers in different programming languages
 * @param code - The user-submitted code
 * @param language - The programming language 
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateAddition(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptAddition(code);
    case 'python':
      return validatePythonAddition(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that adds two numbers
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly adds two numbers
 */
function validateJavaScriptAddition(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return sum(3, 5) === 8 && sum(-1, 1) === 0 && sum(10, 20) === 30;
      } catch (error) {
        return false;
      }
    `);
    
    return evalFunction();
  } catch (error) {
    return false;
  }
}

/**
 * Validates a Python function that adds two numbers
 * This is a frontend simulation of Python code validation
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly adds two numbers
 */
function validatePythonAddition(code: string): boolean {
  try {
    // Simple regex validation since we can't execute Python in browser
    // Check for def sum function with two parameters
    const hasSumFunction = /def\s+sum\s*\(\s*a\s*,\s*b\s*\)\s*:/i.test(code);
    
    // Check for return statement with addition
    const hasReturnStatement = /return\s+a\s*\+\s*b/i.test(code);
    
    return hasSumFunction && hasReturnStatement;
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that finds the maximum of three numbers
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateMaximum(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptMaximum(code);
    case 'python':
      return validatePythonMaximum(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that finds the maximum of three numbers
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly finds the maximum
 */
function validateJavaScriptMaximum(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          findMax(3, 5, 1) === 5 && 
          findMax(-1, -3, -2) === -1 && 
          findMax(10, 10, 10) === 10 &&
          findMax(7, 2, 9) === 9
        );
      } catch (error) {
        return false;
      }
    `);
    
    return evalFunction();
  } catch (error) {
    return false;
  }
}

/**
 * Validates a Python function that finds the maximum of three numbers
 * This is a frontend simulation of Python code validation
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly finds the maximum
 */
function validatePythonMaximum(code: string): boolean {
  try {
    // Simple regex validation
    const hasFindMaxFunction = /def\s+findMax\s*\(\s*a\s*,\s*b\s*,\s*c\s*\)\s*:/i.test(code);
    
    // Check if using max function or comparison operators
    const usingMaxFunction = /return\s+max\s*\(\s*.*a.*,.*b.*,.*c.*\s*\)/i.test(code);
    const usingComparisons = /if.*>.*and.*>.*:|if.*>=.*and.*>=.*:|if.*>.*:|elif.*>.*:|else.*return/i.test(code);
    
    return hasFindMaxFunction && (usingMaxFunction || usingComparisons);
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that reverses a string
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateStringReverse(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptStringReverse(code);
    case 'python':
      return validatePythonStringReverse(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that reverses a string
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly reverses a string
 */
function validateJavaScriptStringReverse(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          reverseString("hello") === "olleh" && 
          reverseString("JavaScript") === "tpircSavaJ" && 
          reverseString("12345") === "54321" &&
          reverseString("") === ""
        );
      } catch (error) {
        return false;
      }
    `);
    
    return evalFunction();
  } catch (error) {
    return false;
  }
}

/**
 * Validates a Python function that reverses a string
 * This is a frontend simulation of Python code validation
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly reverses a string
 */
function validatePythonStringReverse(code: string): boolean {
  try {
    // Simple regex validation
    const hasReverseStringFunction = /def\s+reverseString\s*\(\s*s\s*\)\s*:/i.test(code);
    
    // Check for different ways to reverse a string in Python
    const usingSlice = /return\s+s\s*\[\s*::\s*-1\s*\]/i.test(code);
    const usingReversed = /return\s+['"]?['"]?.join\s*\(\s*reversed\s*\(\s*s\s*\)\s*\)|return\s+['"]?['"]?.join\s*\(\s*list\s*\(\s*reversed\s*\(\s*s\s*\)\s*\)\s*\)/i.test(code);
    const usingLoop = /for.*in.*:|while.*:/i.test(code);
    
    return hasReverseStringFunction && (usingSlice || usingReversed || usingLoop);
  } catch (error) {
    return false;
  }
}
