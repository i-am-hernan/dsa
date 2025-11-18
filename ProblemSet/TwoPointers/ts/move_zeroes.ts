/*
 * Example:
 *Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Ideas:
 * */

function moveZeroes(nums: number[]): void {
  if (!nums) {
    throw Error("Missing required nums")
  }
  if (nums.length < 2) {
    return;
  }
  let readPtr = 0, writePtr = 0;
  while (readPtr < nums.length) {
    if (nums[readPtr] !== 0) {
      nums[writePtr] = nums[readPtr]
      writePtr++
    }
    readPtr++;
  }
  for (let i = writePtr; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/*
Test Cases:
[0,1,0,3,12]
Lesson:
- Sometimes look at starting both the pointers at zero. 
*/
let testCase = [
  [0, 1, 0, 3, 12],
  [0, 0, 1]
]

testCase.forEach((test) => {
  console.log('Before moving zeros: ', test);
  moveZeroes(test);
  console.log('After moving zeros: ', test)
})
