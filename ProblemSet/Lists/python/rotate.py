# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


# Pseudo:
# Make a copy of the head node
# Get the length (len) of the linkedLIst
# Traverse to n- len - 1 mod len of the list
# Get a reference to next node
# Set next node to null
# Set next of current node to the reference for head

class Solution:
    def getListLength(self, head:Optional[ListNode]) -> Int:
        node = head
        length = 0
        while node is not None:
            length += 1
            node = node.next
        return length

    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        list1Ptr = head
        len = getListLength(head)
        
        # Base cases
        if not head or not head.next or k == 0:
            return head

        # Traverse to the node rightmost before slicing the list
        slicePos = len - (k%len) - 1
        while slicePos > 0:
            list1Ptr = list1Ptr.next
            slicePos -= 1

        # Get a reference to the next node, and set next of current to the reference for head
        list2Ptr = list1Ptr.next
        list1Ptr.next = None
        rotatedRightHead = list2Ptr

        # Iterate to the end of the second list and append the old head to the tail of the new list
        while list2Ptr.next is not None:
            list2Ptr = list2Ptr.next

        list2Ptr.next = head
        return rotatedRightHead






        
    

