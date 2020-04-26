/* Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both? 

https://www.youtube.com/watch?v=XwIivDg1BlY
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//iterative
const reverseList = head => {
    let current = head
    let prev = null
    let next

    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

// const reverseList = function (head) {
//     const helper = (current, prev) => {
//         if (!current) return prev
//         let next = current.next
//         current.next = prev
//         return helper(next, current)
//     }
//     return helper(head, null)
// }


const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)

console.log(reverseList(l1))