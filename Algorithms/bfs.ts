const bfsBinaryTree = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length) {
    const node = queue.shift()!;
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

const bfsGraph = (start: string, graph: Record<string, string[]>): string[] => {
  const visited = new Set<string>();
  const queue: string[] = [start];
  const result: string[] = [];

  while (queue.length) {
    const node = queue.shift()!;
    if (visited.has(node)) continue;

    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) queue.push(neighbor);
    }
  }

  return result;
};
