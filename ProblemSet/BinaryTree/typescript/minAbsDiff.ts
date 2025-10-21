// treeExamples.ts
/**
 * Example 2: Binary Tree
 * Tree structure:
 *         1
 *        / \
 *       2   3
 *      / \    \
 *     4   5    6
 *
 * Notes:
 * - Push everything to the result
 *   if there are two 
 */
/*
          (8)
         /   \
       (3)   (10)
      /  \      \
    (1)  (6)    (14)
        /  \    /
      (4)  (7)(13)
*/

const absolute_minimum_difference = (root: TreeNode | null, result: number[]): number => {
  let minimum = Infinity;
  let lastVal: number | undefined = undefined;
  const absolute_minimum_difference_helper = (root: TreeNode | null, result: number[] = []): number[] => {
    if (!root) return result;

    absolute_minimum_difference_helper(root.left, result)
    if (lastVal !== undefined) {
      minimum = Math.min(minimum, Math.abs(root.val - lastVal));
    }
    absolute_minimum_difference_helper(root.right, result)
    lastVal = root.val;

    return result;
  }
  absolute_minimum_difference_helper(root);
  return minimum;
}




