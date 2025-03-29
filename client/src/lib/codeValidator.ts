/**
 * Validates a JavaScript function that adds two numbers
 * @param code - The user-submitted JavaScript code
 * @returns boolean indicating if the code correctly adds two numbers
 */
export function validateAddition(code: string): boolean {
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
