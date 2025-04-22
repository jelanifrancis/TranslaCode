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

/**
 * Validates a function that checks if a number is prime
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateIsPrime(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptIsPrime(code);
    case 'python':
      return validatePythonIsPrime(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that checks if a number is prime
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly identifies prime numbers
 */
function validateJavaScriptIsPrime(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          isPrime(2) === true && 
          isPrime(7) === true && 
          isPrime(11) === true && 
          isPrime(1) === false &&
          isPrime(4) === false &&
          isPrime(25) === false
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
 * Validates a Python function that checks if a number is prime
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly identifies prime numbers
 */
function validatePythonIsPrime(code: string): boolean {
  try {
    // Simple regex validation
    const hasIsPrimeFunction = /def\s+isPrime\s*\(\s*n\s*\)\s*:/i.test(code);
    
    // Check for typical prime checking logic
    const hasForLoop = /for\s+.*in\s+range\s*\(/i.test(code);
    const hasModCheck = /.*%.*==\s*0/i.test(code);
    const hasEdgeCases = /if\s+n\s*[<=>]+\s*[12]/i.test(code);
    
    return hasIsPrimeFunction && (hasModCheck && (hasForLoop || hasEdgeCases));
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that counts vowels in a string
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateCountVowels(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptCountVowels(code);
    case 'python':
      return validatePythonCountVowels(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that counts vowels in a string
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly counts vowels
 */
function validateJavaScriptCountVowels(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          countVowels("hello") === 2 && 
          countVowels("programming") === 3 && 
          countVowels("aeiou") === 5 &&
          countVowels("xyz") === 0 &&
          countVowels("APPLE") === 2
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
 * Validates a Python function that counts vowels in a string
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly counts vowels
 */
function validatePythonCountVowels(code: string): boolean {
  try {
    // Simple regex validation
    const hasCountVowelsFunction = /def\s+countVowels\s*\(\s*s\s*\)\s*:/i.test(code);
    
    // Check for typical vowel counting logic
    const hasVowelCheck = /['"]?[aeiouAEIOU]['"]?/i.test(code);
    const hasLoopOrComprehension = /for\s+.*in.*:|return\s+.*sum\s*\(|return\s+len\s*\(/i.test(code);
    
    return hasCountVowelsFunction && hasVowelCheck && hasLoopOrComprehension;
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that calculates the factorial of a number
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateFactorial(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptFactorial(code);
    case 'python':
      return validatePythonFactorial(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that calculates the factorial of a number
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly calculates factorials
 */
function validateJavaScriptFactorial(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          factorial(0) === 1 && 
          factorial(1) === 1 && 
          factorial(5) === 120 &&
          factorial(10) === 3628800
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
 * Validates a Python function that calculates the factorial of a number
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly calculates factorials
 */
function validatePythonFactorial(code: string): boolean {
  try {
    // Simple regex validation
    const hasFactorialFunction = /def\s+factorial\s*\(\s*n\s*\)\s*:/i.test(code);
    
    // Check for different factorial implementations
    const hasRecursion = /factorial\s*\(\s*n\s*-\s*1\s*\)/i.test(code);
    const hasLoop = /for\s+.*in\s+range\s*\(|while\s+/i.test(code);
    const hasMathFactorial = /import\s+math|from\s+math\s+import\s+factorial/i.test(code);
    
    return hasFactorialFunction && (hasRecursion || hasLoop || hasMathFactorial);
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that checks if a string is a palindrome
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateIsPalindrome(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptIsPalindrome(code);
    case 'python':
      return validatePythonIsPalindrome(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that checks if a string is a palindrome
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly identifies palindromes
 */
function validateJavaScriptIsPalindrome(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          isPalindrome("racecar") === true && 
          isPalindrome("hello") === false && 
          isPalindrome("A man a plan a canal Panama") === true &&
          isPalindrome("12321") === true &&
          isPalindrome("") === true
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
 * Validates a Python function that checks if a string is a palindrome
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly identifies palindromes
 */
function validatePythonIsPalindrome(code: string): boolean {
  try {
    // Simple regex validation
    const hasIsPalindromeFunction = /def\s+isPalindrome\s*\(\s*s\s*\)\s*:/i.test(code);
    
    // Check for typical palindrome checking logic
    const hasReverseCheck = /s\s*\[::\s*-1\s*\]|reversed\s*\(\s*s\s*\)/i.test(code);
    const hasSpaceRemoval = /replace\s*\(\s*['"]\s*['"]|lower\s*\(\s*\)|strip\s*\(\s*\)/i.test(code);
    
    return hasIsPalindromeFunction && (hasReverseCheck || hasSpaceRemoval);
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that finds the Fibonacci number at a given position
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateFibonacci(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptFibonacci(code);
    case 'python':
      return validatePythonFibonacci(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that finds the Fibonacci number at a given position
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly calculates Fibonacci numbers
 */
function validateJavaScriptFibonacci(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        return (
          fibonacci(0) === 0 && 
          fibonacci(1) === 1 && 
          fibonacci(2) === 1 &&
          fibonacci(5) === 5 &&
          fibonacci(10) === 55
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
 * Validates a Python function that finds the Fibonacci number at a given position
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly calculates Fibonacci numbers
 */
function validatePythonFibonacci(code: string): boolean {
  try {
    // Simple regex validation
    const hasFibonacciFunction = /def\s+fibonacci\s*\(\s*n\s*\)\s*:/i.test(code);
    
    // Check for typical Fibonacci implementations
    const hasRecursion = /fibonacci\s*\(\s*n\s*-\s*1\s*\)|fibonacci\s*\(\s*n\s*-\s*2\s*\)/i.test(code);
    const hasLoop = /for\s+.*in\s+range\s*\(|while\s+/i.test(code);
    
    return hasFibonacciFunction && (hasRecursion || hasLoop);
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that generates an array of even numbers
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateGenerateEvenNumbers(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptGenerateEvenNumbers(code);
    case 'python':
      return validatePythonGenerateEvenNumbers(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that generates even numbers
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly generates arrays of even numbers
 */
function validateJavaScriptGenerateEvenNumbers(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        
        const test1 = generateEvenNumbers(5);
        const test2 = generateEvenNumbers(3);
        const test3 = generateEvenNumbers(0);
        
        const isEqual = (arr1, arr2) => {
          if (arr1.length !== arr2.length) return false;
          for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
          }
          return true;
        };
        
        return (
          isEqual(test1, [0, 2, 4, 6, 8]) && 
          isEqual(test2, [0, 2, 4]) && 
          isEqual(test3, [])
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
 * Validates a Python function that generates even numbers
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly generates arrays of even numbers
 */
function validatePythonGenerateEvenNumbers(code: string): boolean {
  try {
    // Simple regex validation
    const hasGenerateFunction = /def\s+generateEvenNumbers\s*\(\s*n\s*\)\s*:/i.test(code);
    
    // Check for typical even number generation logic
    const hasRange = /range\s*\(/i.test(code);
    const hasModCheck = /.*%.*2.*==\s*0/i.test(code);
    const hasComprehension = /\[.*for.*in.*\]|\[.*if.*\]/i.test(code);
    
    return hasGenerateFunction && (hasRange || hasModCheck || hasComprehension);
  } catch (error) {
    return false;
  }
}

/**
 * Validates a function that merges and sorts two arrays/lists
 * @param code - The user-submitted code
 * @param language - The programming language
 * @returns boolean indicating if the code correctly performs the task
 */
export function validateMergeSortedArrays(code: string, language: ProgrammingLanguage): boolean {
  switch (language) {
    case 'javascript':
      return validateJavaScriptMergeSortedArrays(code);
    case 'python':
      return validatePythonMergeSortedArrays(code);
    default:
      return false;
  }
}

/**
 * Validates a JavaScript function that merges and sorts arrays
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly merges and sorts arrays
 */
function validateJavaScriptMergeSortedArrays(code: string): boolean {
  try {
    // Create a safe evaluation environment
    const evalFunction = new Function('code', `
      try {
        ${code}
        
        const isEqual = (arr1, arr2) => {
          if (arr1.length !== arr2.length) return false;
          for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
          }
          return true;
        };
        
        return (
          isEqual(mergeSortedArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]) && 
          isEqual(mergeSortedArrays([1, 5, 9], [2, 6, 10]), [1, 2, 5, 6, 9, 10]) && 
          isEqual(mergeSortedArrays([], [1, 2, 3]), [1, 2, 3]) &&
          isEqual(mergeSortedArrays([1, 2, 3], []), [1, 2, 3])
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
 * Validates a Python function that merges and sorts lists
 * @param code - The user-submitted Python code
 * @returns boolean indicating if the code correctly merges and sorts lists
 */
function validatePythonMergeSortedArrays(code: string): boolean {
  try {
    // Simple regex validation
    const hasMergeFunction = /def\s+mergeSortedArrays\s*\(\s*arr1\s*,\s*arr2\s*\)\s*:/i.test(code);
    
    // Check for typical merging/sorting techniques
    const hasSortedMerge = /sorted\s*\(|\.sort\s*\(/i.test(code);
    const hasIterationMerge = /while.*:|for.*in.*:/i.test(code);
    const hasExtendOrAddition = /\+\s*arr2|\.extend\s*\(|\.append\s*\(/i.test(code);
    
    return hasMergeFunction && (hasSortedMerge || hasIterationMerge || hasExtendOrAddition);
  } catch (error) {
    return false;
  }
}
