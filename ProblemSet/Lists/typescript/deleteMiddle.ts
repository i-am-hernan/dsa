/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteMiddle(head: ListNode | null): ListNode | null {
  let getListLength = (head: ListNode | null): number => {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }

  if (!head) {
    return null;
  }

  let ptr: ListNode | null = head;
  let listLength = getListLength(ptr);

  if (listLength <= 1) {
    return null;
  }

  for (let i = 0; i < Math.floor(listLength / 2) - 1; i++) {
    ptr = ptr ? ptr.next : null;
  }

  if (ptr) {
    ptr.next = ptr?.next?.next ?? null;
    console.log(ptr.val)
  }
  return head;
};

