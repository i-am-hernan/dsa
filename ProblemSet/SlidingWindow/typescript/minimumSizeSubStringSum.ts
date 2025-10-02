/*
 * 209. Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:

    1 <= target <= 109
    1 <= nums.length <= 105
    1 <= nums[i] <= 104
Input: target = 7, nums = [8,3,1,2,4,3]
Output: 2
Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).*/

function minSubArrayLen(target: number, nums: number[]): number {
	let i = 0, j = 0;
	let sum = 0;
	let minimum = nums.length + 1;

	while(i < nums.length){
		sum += nums[i];
		while(sum >= target && j < nums.length){	
			minimum = Math.min(minimum, i - j + 1);
			sum -= nums[j++];
		}
		i++;
	}

	return minimum <= nums.length ? minimum : 0;
}
