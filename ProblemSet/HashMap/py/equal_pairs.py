from typing import List


class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        rows = {i: tuple(row) for i, row in enumerate(grid)}
        cols = {i: tuple(col) for i, col in enumerate(zip(*grid))}

        return sum(row == col for row in rows.values() for col in cols.values())
