class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        maxAverage: float = float('-inf')
        total: int = 0
        headOfWindow = 0

        for i in range(len(nums)):
            total += nums[i]
            while i - headOfWindow + 1 == k:
                maxAverage = max(maxAverage, total / k)
                total -= nums[headOfWindow]
                headOfWindow += 1
        return maxAverage


