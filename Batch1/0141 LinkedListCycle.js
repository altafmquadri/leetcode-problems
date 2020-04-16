/* Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position(0 - indexed) in the linked list where tail connects to.If pos is - 1, then there is no cycle in the linked list.

Example 1:
Input: head = [3, 2, 0, -4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1, 2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/


class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const hasCycle = head => {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) return true
    }
    return false
}


const l1 = new ListNode(3)
l1.next = new ListNode(2)
l1.next.next = new ListNode(0)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = l1.next

const l2 = new ListNode(1)
l2.next = new ListNode(2)
l2.next.next = l2

const l3 = new ListNode(1)

console.log(hasCycle(l1)) //true
console.log(hasCycle(l2)) //true
console.log(hasCycle(l3)) //false