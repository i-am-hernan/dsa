from typing import Optional
# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return None
        slowPtr = head
        fastPtr = head.next.next
        while fastPtr is not None and fastPtr.next is not None:
            slowPtr = slowPtr.next
            fastPtr = fastPtr.next.next
        slowPtr.next = slowPtr.next.next
        return head
