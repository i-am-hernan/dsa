// treeExamples.ts
/**
 * Example 2: Binary Tree
 * Tree structure:
 *         1
 *        / \
 *       2   3
 *      / \    \
 *     4   5    6
 */
type TreeNode = {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
};

const tree: TreeNode = {
	val: 1,
	left: {
		val: 2,
		left: { val: 4, left: null, right: null },
		right: { val: 5, left: null, right: null }
	},
	right: {
		val: 3,
		left: null,
		right: { val: 6, left: null, right: null }
	}
};

/**
 * Tree Traversal Expectations:
 * 
 * Pre-order (Root, Left, Right):   1 → 2 → 4 → 5 → 3 → 6
 * In-order (Left, Root, Right):    4 → 2 → 5 → 1 → 3 → 6
 * Post-order (Left, Right, Root):  4 → 5 → 2 → 6 → 3 → 1
 * BFS (Level-order):               1 → 2 → 3 → 4 → 5 → 6
 */

//Binary Trees
const preOrderRecursiveDfs = (root: TreeNode | null, result: number [] = []): number [] => {
	if(!root){
		return result;}
	result.push(root.val)
	preOrderRecursiveDfs(root.left, result);
	preOrderRecursiveDfs(root.right, result);
	return result;
}

const preOrderIterativeDfs = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const stack: TreeNode[] = [root];
  const result: number[] = [];

  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);

    // Push right first so left is processed first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

const inOrderRecursiveDfs = (root: TreeNode | null, result: number [] = []) : number [] => {
	if (!root) return result;

	inOrderRecursiveDfs(root.left, result)
	result.push(root.val)
	inOrderRecursiveDfs(root.right, result)

	return result;
}

const postOrderRecursiveDfs = (root: TreeNode | null, result: number [] = []) : number [] => {

	if(!root) return result;
	postOrderRecursiveDfs (root.left, result);
	postOrderRecursiveDfs (root.right, result);
	result.push(root.val);

	return result;
}

//Graphs
/**
 * Example 1: Adjacency List Graph
 * Graph structure:
 *     A
 *    / \
 *   B   C
 *  / \   \
 * D   E   F
 *
 * Expected DFS (Depth-First Search) from A:
 * A → B → D → E → C → F
 *
 * Expected BFS (Breadth-First Search) from A:
 * A → B → C → D → E → F
 */

const graph: Record<string, string[]> = {
	A: ["B", "C"],
	B: ["D", "E"],
	C: ["F"],
	D: [],
	E: [],
	F: []
};


const preOrderRecursiveDfsGraph = (
  node: string,
  graph: Record<string, string[]>,
  result: string[] = [],
  visited: Set<string> = new Set()
): string[] => {
  // Base case: skip if already visited
  if (visited.has(node)) return result;

  // Mark current node as visited
  visited.add(node);

  // "Preorder" step → visit node before children
  result.push(node);

  // Recurse on all neighbors (n-ary)
  for (const neighbor of graph[node] || []) {
    preOrderRecursiveDfsGraph(neighbor, graph, result, visited);
  }

  return result;
};



const postOrderRecursiveDfsGraph = () => {}
const preOrderIterativeDfsGraph = () => {}
const postOrderIterativeDfsGraph = () => {}


