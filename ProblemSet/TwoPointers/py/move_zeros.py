from typing import List


class Solution:

    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if not nums:
            raise ValueError('Missing required nums')
        if len(nums) < 2:
            return

        write_ptr = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[write_ptr] = nums[i]
                write_ptr = write_ptr + 1

        for i in range(write_ptr, len(nums)):
            nums[i] = 0
