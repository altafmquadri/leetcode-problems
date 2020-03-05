/* Add Two Numbers
You are given two non-empty linked lists
representing two non-negative integers.
The digits are stored in reverse order and
each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not
contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

const addTwoNumbers = (l1, l2) => {
    let dummyNode = new ListNode(0) //Dummy Node as a pointer
    let currNode = dummyNode
    let carry = 0

    while (l1 || l2 || carry) {
        /* if anything is greater than or equal to 10, 
        it's carried over into the sum as 1*/
        let sum = carry

        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            carry = 1
            sum -= 10 //subtract out 10 for the carry
        } else {
            carry = 0
        }
        currNode.next = new ListNode(sum)
        currNode = currNode.next
    }
    return dummyNode.next //we advance the pointer to get rid of dummy node
}

console.log(addTwoNumbers(l1, l2)) // 7 -> 0 -> 8