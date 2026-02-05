class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        result = 0
        flipped = 0

        j = 0
        for i in range(len(nums)):
            flipped += int(nums[i] == 0)
            while flipped > k:
                flipped -= int(nums[j] == 0)
                j += 1
            result = max(i-j+1, result)

        return result
