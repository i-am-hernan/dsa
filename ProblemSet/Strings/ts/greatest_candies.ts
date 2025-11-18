/*
Algo:
- Loop through candies and get the max number
- Loop through array and determine if candy is greater than max
- If it is pop true/false in the array
*/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

  if (!candies) {
    throw new Error('Missing candies')
  }

  let max = -Infinity;
  candies.forEach((value) => {
    if (value > max) {
      max = value;
    }
  })

  return candies.map((value, i) => {
    return (value + extraCandies) >= max
  })
};
