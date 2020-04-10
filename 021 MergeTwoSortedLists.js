/* 
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const mergeTwoLists = (l1, l2) => {
    let newNode = new ListNode('dummy')
    let current = newNode

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    while (l1) {
        current.next = l1
        l1 = l1.next
        current = current.next
    }

    while (l2) {
        current.next = l2
        l2 = l2.next
        current = current.next
    }

    return newNode.next
}


let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)
let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)


console.log(mergeTwoLists(l1, l2)) //1->1->2->3->4->4