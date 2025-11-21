/*
Given an unsorted array of integers. Find an element such that all the elements to its left are smaller and to its right are greater. Print -1 if no such element exists. 
Note that there can be more than one such elements. For example an array which is sorted in increasing order all elements follow the property. We need to find only one such element.
*/

const FindPivot = (A: number[]): number => {
	const GreatestToTheLeft: number[] = [];
	const LeastToTheRight: number[] = [];

	let max = Number.NEGATIVE_INFINITY;
	for (const [i, num] of A.entries()) {
		if (num > max) max = num;
		GreatestToTheLeft[i] = max;
	}

	let min = Number.POSITIVE_INFINITY;
	for (let i = A.length - 1; i >= 0; i--) {
		if (A[i] < min) min = A[i];
		LeastToTheRight[i] = min;
	}

	for (let i = 1; i < A.length - 1; i++) {
		if (A[i] > GreatestToTheLeft[i - 1] && A[i] < LeastToTheRight[i + 1]) {
			return A[i];
		}
	}

	return -1;

}
console.log(FindPivot([4, 3, 2, 5, 8, 6, 7])); // should return 5
console.log(FindPivot([1, 2, 3, 4, 5]));       // could return 2, 3, etc.
console.log(FindPivot([5, 4, 3, 2, 1]));       // should return -1

/*
 * Example:
 * {4, 3, 2, 5, 8, 6, 7} 
 * GreatestToTheLeft = [4, 4, 4, 5, 8, 8, 8]
 * LeastToRight = [2,2,2,5,6,6,7]
 * We need to handle cases where the first element can be the pivot
 * {1,2,3,4}
 * [1,2,3,4]
 * [1,2,3,4]
 * So here the pivot is zero, meaning we never handle hit our edges
 Algorithm:
 create an array GreatestToTheLeft such that GreatestToTheLeft[i] = max(A[0], A[i])
 create an array LeastToTheLeft such that LeastToTheRight[j] = min(A[j], A[A.length - 1]
 Loop through A, and find k, such that GreatestToTheLeft[k - 1] < A[k] < LeastToTheRight[k+1]
 
 Learnings:
 You can find the min/max in O(n) by looping one at at ime,  
 * */

