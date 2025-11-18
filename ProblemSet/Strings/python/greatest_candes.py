from typing import List


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        if not candies:
            raise ValueError("Missing candies")

        max = float('-inf')
        for candie in candies:
            if candie > max:
                max = candie
        mostCandies = [value + extraCandies >= max for value in candies]
        return mostCandies
