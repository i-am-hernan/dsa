// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

/*
 * Brainstorm:
 * Keep a stack of all left occuring parenthesis ie ({[]})
 * Here we would push ({[
 * Then when we get to a non left occuring bracket, we pop the value from the stack and ensure it is left occuring 
 * Then check to see at the end that the stack is empty
 * Pseudocode
 * 1. Create empty stack
 * Loop through the string
 * 2. If left bracket push to stack
 * 3. If right bracket pop from stack and check to see it is a match, return false
 * 4. After if stack is not empty return false
 * 5. return true
 * */
function isValid(s: string): boolean {

  const BRACKETS = new Map(
    [
      ['(', ')'],
      ['{', '}'],
      ['[', ']'],
    ]
  )
  const currBrackets = []

  for (const char of s) {
    if (BRACKETS.has(char)) {
      currBrackets.push(BRACKETS.get(char))
    } else if (currBrackets.pop() !== char) {
      return false;
    }
  }

  if (currBrackets.length > 0) {
    return false;
  }
  return true;
};






