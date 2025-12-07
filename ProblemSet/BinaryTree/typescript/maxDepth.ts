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

/*
 * Ideas:
 * - BFT
 * - First clear out the stack then add a number to the level
 * */
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;

  }
  return depth;
}

