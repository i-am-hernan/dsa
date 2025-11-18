/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Notes:
- Create a function called isDivisor
- It takes a char and a string, and determines if the char is a divisor
- Create a function called find divisors 
- It will iterate through the whole word with each letter and return an array of divisors 
- find the greatest common string in both of arrays. Start with shortest word divirsors array and check to see if it is in the largestWorddivisor array, then work your way down till you find it.  
- isDivisor array
- letter * len(word) === word

*/
function gcdOfStrings(str1: string, str2: string): string {

  const isDivisor = (subword: string, word: string): boolean => {
    if(word.length % subword.length !==0){
      return false;
    }

    let divisor = '';
    let denominator = word.length / subword.length;
    for(let i = 0; i < denominator; i++){
      divisor += subword;
    }
    if(divisor === word){
      return true;
    }
    return false;
  }

  const findDivisors = (word: string): Set<string> => {
    let subString: string = '';
    let divisors: Set<string> = new Set();
    for( let i = 0; i < word.length; i++){
      subString += word[i];
      if (isDivisor(subString, word)){
        divisors.add(subString)
      }
    }
    return divisors;
  }

  const str1Divisors: Set<string> = findDivisors(str1);
  const str2Divisors: Set<string> = findDivisors(str2);
  let greatestCommonDivisors: string = '';

  for (let divisor of str1Divisors){
    if(str2Divisors.has(divisor) && divisor.length > greatestCommonDivisors.length){
      greatestCommonDivisors = divisor;
    }
  }
  return greatestCommonDivisors;
};
