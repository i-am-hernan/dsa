/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
Ideas:
1. maintain max average, set it first to integer minimum
2. Create two pointers, one at k and the other at 0
3. As you slide the right by one, slide the left by one, and calculate the average, update it if its greater than the current max average
  */
function findMaxAverage(nums: number[], k: number): number {

  let maxAverage: number = -Infinity
  let total: number = 0
  let headOfWindow: number = 0

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    while (i - headOfWindow + 1 === k) {
      maxAverage = Math.max(maxAverage, total / k);
      total -= nums[headOfWindow];
      headOfWindow++;
    }
  }

  return maxAverage
};

/*
 * Test cases:
 * */
let test = [{ nums: [1,12,-5,-6,50,3], k: 4 }]

test.forEach((val) => {
  console.log(findMaxAverage(val.nums, val.k));
})
