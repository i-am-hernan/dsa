/*
Problem:
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Solution:
- Create a new word called wordsCombined 
- Get the minimum length of the two words
- Loop towards the minimum length
- At the of the loop if there is some of the word left than append it to the end of combined. 
* */

function mergeAlternately(word1: string, word2: string): string {
  //Edge Cases:
  if(typeof word1 !== "string" || word1.length === 0){
    throw new Error("Word1 is not valid")
  }

  if(typeof word2 !== "string" || word2.length === 0){
    throw new Error("Word2 is not valid")
  }

  // Createa a new word and get minimum length
  let wordsCombined: string = '';
  let minimumLength: number = Math.min(word1.length, word2.length);

  //Loop towareds the minimum length
  for (let i = 0; i < minimumLength; i++) {
    wordsCombined = wordsCombined + word1.charAt(i) + word2.charAt(i);
  }

  // Append the tail of the longest word to the shorter word
  if (word1.length > minimumLength) {
    wordsCombined += word1.slice(minimumLength, word1.length)
  } else if (word2.length > minimumLength) {
    wordsCombined += word2.slice(minimumLength, word2.length)
  }

  return wordsCombined;
};

const testCases: string[][] = [['ab', 'pqrs'], ['steve', 'chalco'], ['', 'another']];

testCases.forEach((val) => {
  console.log(mergeAlternately(val[0], val[1]))
})

