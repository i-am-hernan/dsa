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

// These only work for trees which are graphs without cycles
// More specifically, think about whether these make sense for binary, n-ary trees, graphs
const preOrderRecursiveDfs = (root: TreeNode | null, result: number [] = []): number [] => {
	if(!root){
		return result;}
	result.push(root.val)
	preOrderRecursiveDfs(root.left, result);
	preOrderRecursiveDfs(root.right, result);
	return result;
}

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

const preOrderIterativeDfs = (root: TreeNode | null, result: number[] = [])  => {
	const stack = [];
	const visited = new Map();
	const results = [];	
	stack.push(root);

	while(stack.length){
		// first we visit
	}
}
//console.log(preOrderRecursiveDfs(tree));
//console.log(inOrderRecursiveDfs(tree));
//console.log(postOrderRecursiveDfs(tree));

// dfs graph traversals

/**
 * Example 1: Adjacency List Graph
 * Graph structure:
 *     A
 *    / \
 *   B   C
 *  / \   \
 * D   E   F
 */
const graph: Record<string, string[]> = {
	A: ["B", "C"],
	B: ["D", "E"],
	C: ["F"],
	D: [],
	E: [],
	F: []
};

/**
 * Expected DFS (Depth-First Search) from A:
 * A → B → D → E → C → F
 *
 * Expected BFS (Breadth-First Search) from A:
 * A → B → C → D → E → F
 */

const preOrderRecursiveDfsGraph = (node: string, graph: Record<string, string[]>, result: string [] = [], visited: Set<string> = new Set()): string [] => {
	visited.add(node);
	result.push(node); 
	for( const vertex of graph[node]){
		if(!visited.has(vertex))
			preOrderRecursiveDfsGraph(vertex, graph, result, visited)

	}
	return result;

}


console.log(preOrderRecursiveDfsGraph("A", graph));


const postOrderRecursiveDfsGraph = () => {}
const preOrderIterativeDfsGraph = () => {}
const postOrderIterativeDfsGraph = () => {}


