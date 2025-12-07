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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

  let lcrNode: TreeNode | null = null;
  if (!p || !q) {
    return null;
  }

  const traverseNode = (root: TreeNode | null, p: TreeNode, q: TreeNode) => {
    if (!root) {
      return false;
    }

    const left: number = traverseNode(root.left, p, q) ? 1 : 0;
    const right: number = traverseNode(root.right, p, q) ? 1 : 0;
    const current = root == p || root == q ? 1 : 0;

    if (left + right + current >= 2) {
      lcrNode = root;
    }

    return left + right + current > 0;
  }

  traverseNode(root, p, q);
  return lcrNode;
};
