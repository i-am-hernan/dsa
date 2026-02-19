class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:

        nums1_unique_set = set(nums1)
        nums2_unique_set = set(nums2)

        return [list(nums1_unique_set - nums2_unique_set), list(nums2_unique_set - nums1_unique_set)]
