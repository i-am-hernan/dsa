class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        rightTotal = 1
        leftTotal = 1
        right = [1]
        left = [1]

        for i, num in enumerate(nums):
            rightTotal *= nums[len(nums)-1-i]
            leftTotal *= num
            right.append(rightTotal)
            left.append(leftTotal)
        right.pop()
        left.pop()

        result = []
        for i in range(len(nums)):
            result.append(right[len(right)-1-i]*left[i])
        return result
