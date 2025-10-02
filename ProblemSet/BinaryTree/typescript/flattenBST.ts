/*
Given the root of a binary tree, flatten the tree into a "linked list":

    The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
    The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Notes:
I can traverse in preorder and put everything in a queue
[1,2,3,4,5,6]
Make the left node null
Then construct the tree 
BFS => o(logN) time complexity, and o(n) space complexity

To do o(1) space
What if you disconnect the right tree
Now you have two trees
inorder bfs the left tree and push it into the right tree
Then take the new tree
Disconnect the right tree
Now you have two tree
inorderbfs the left tree and push it into the right tree
continue the same

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
class TreeNodes {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}
// function flatten(root: TreeNodes | null): void {
// 	if (!root) return;
//
// 	const rightSubTree = root.right;
//
// 	if (!root.right) {
// 		root.right = new TreeNodes(root.val);
// 	} else {
// 		root.right.val = root.val;
// 	}
// 	flatten(root.left);
// 	flatten(rightSubTree);
// };

function flatten(root: TreeNodes | null): void {
	// traverse in reverse post order, which is the reverse of preorder
	// pass the previous node to the next recursive call, so that we can attach  4 -> 5 
	// Set its left pointer to null
	let prev: TreeNodes | null = null;
	const reversePostOrder = (root: TreeNodes | null): void => {
		if (!root) return;

		reversePostOrder(root.right);
		reversePostOrder(root.left);
		root.right = prev;
		root.left = null;
		prev = root;
	}
	reversePostOrder(root);
}

