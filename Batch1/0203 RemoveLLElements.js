/* Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5 

https://www.youtube.com/watch?v=nVpgHAZdhQQ
*/


class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const removeElements = (head, val) => {
    if (!head) return null // if no head
    let dummy = new ListNode('dummy') // dummy node
    dummy.next = head // to connect to the list
    head = dummy // point head to dummy

    while (dummy.next !== null) {
        if (dummy.next.val === val) dummy.next = dummy.next.next
        else dummy = dummy.next
    }
    return head.next
}

const L1 = new ListNode(1)
L1.next = new ListNode(2)
L1.next.next = new ListNode(6)
L1.next.next.next = new ListNode(6)
L1.next.next.next.next = new ListNode(4)
L1.next.next.next.next.next = new ListNode(5)
L1.next.next.next.next.next.next = new ListNode(6)

console.log(removeElements(L1, 6))


