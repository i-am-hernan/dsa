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
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}


function addTwoNumbersNaive(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	function listToNum(l: ListNode | null): number {
		let sum: number = 0;
		let i: number = 0;

		while (l) {
			sum += Math.pow(10, i) * l.val;
			i++;
			l = l.next;
		}
		return sum;
	}

	function numToList(val: number): ListNode | null {
		let listNumber: ListNode = new ListNode();
		const head: ListNode = listNumber;
		let n: number = 0
		while (val > 0) {
			const temp = val % Math.pow(10, n + 1);
			val -= temp;
			listNumber.val = temp / Math.pow(10, n);
			if (val > 0) {
				listNumber.next = new ListNode();
				listNumber = listNumber.next;
			}
			n++;
		}
		return head;
		/*
 * val = 342, n = 0
 * temp = 342|10 = 2
 * val = 340
 * listNumber.val = 2
 *
/ * */
	}

	return numToList(listToNum(l1) + listToNum(l2));
};
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let sum = new ListNode();
	let head = sum;
	let residual = 0;
	while (l1 || l2 || residual) {
		if (l1) {
			sum.val += l1.val;
		}
		if (l2) {
			sum.val += l2.val;
		}
		if (residual) {
			sum.val += 1;
		}
		residual = sum.val > 9 ? 1 : 0;
		sum.val = sum.val % 10;
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
		if (l1 || l2 || residual) {
			sum.next = new ListNode();
			sum = sum.next;
		}

	}
	return head;
}
/*Input: l1 = [2,4,3], l2 = [5,6,4]
 *
 *
 * Create a function that iterates through a ListNode and returns the number
 * return the sum of listToNum(L1) + listToNum(L2)
 *
 * You can generate the number by using 10^n * x1 + x0
 * Once we have the sum, we need to create a new linked list, do this by creating a function numToList
 *
 * Ex 342
 * 342 mod 10^1 = 2, divide by 10^0 
 * put this value in your list
 * subtract 2 from 342 = 340
 * 340 mod 10^2 = 40 , divide by 10^1 = 4
 * Put this number in you list
 * subtract by 40 = 300
 * 300 mod 10^3 = 300, subtract that from total number, divide it by 10^2 = 3
 * Put this number in your list
 * 
 * */

