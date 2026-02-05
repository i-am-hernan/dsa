class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        result = 0
        flipped = 0

        j = 0
        for i in range(len(nums)):
            flipped += int(nums[i] == 0)
            while flipped > 1:
                print(j)
                flipped -= int(nums[j] == 0)
                j += 1
            result = max(i-j, result)
        return result
