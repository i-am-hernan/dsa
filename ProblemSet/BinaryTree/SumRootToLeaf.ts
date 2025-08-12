/*You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

Notes
So we can do preorder traversal root left right
When you visit a root pop it into a stack that you take down the tree 
When you hit a root, meaning that left and right are null
root
push the value into the stack 
send it a function that will take the numbers from the stack and return a full number ex 4,9,5 -> 495

Space complexity is O(n)
Time complexity is O(logn) for dfs preorder

Approach #2
I can do 
2 -> 4 -> 1 I give the stack to my calculate function and then I pop out 1

*/


class TreeNode3 {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function sumNumbers(root: TreeNode3 | null): number {
	let netSum = 0;
	const sumStack = (intStack: number[] = []): number => {
		let sum: number = 0;
		for (let i = intStack.length - 1, factor = 1; i >= 0; i++, factor *= 10) {
			sum += intStack[i] * factor;
		}
		return sum;
	}
	const sumTree = (root: TreeNode3 | null, sum: number[] = []): number[] => {
		if (!root) return sum;

		sum.push(root.val);
		sumTree(root.left, sum);
		sumTree(root.right, sum);

		if (!root.left && !root.right) {
			netSum += sumStack(sum);
		}
		sum.pop();
		return sum;
	}
	return netSum;
};

