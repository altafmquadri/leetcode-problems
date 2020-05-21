/* 
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
*/

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// const deleteDuplicates = (head) => {
//     const hash = {}
//     const newNode = new ListNode('dummy')
//     let current = newNode
//     let node = head, added

//     while (node) {
//         //create a hash with the val : addedNode
//         if (hash[node.val] === undefined) {
//             //must create a new node with the value so they're no references to next in the original list
//             added = new ListNode(node.val)
//             hash[node.val] = added
//             //traverse the dummy list adding the addedNode
//             current.next = added
//             current = current.next
//         }
//         //proceed to the next node in the original list
//         node = node.next
//     }
//     return newNode.next
// }

//w/o comments
const deleteDuplicates = (head) => {
    const hash = {}
    const newNode = new ListNode('dummy')
    let current = newNode
    let node = head, added

    while (node) {
        if (hash[node.val] === undefined) {
            added = new ListNode(node.val)
            hash[node.val] = added
            current.next = added
            current = current.next
        }
        node = node.next
    }
    return newNode.next
}

const l = new ListNode(1)
l.next = new ListNode(1)
l.next.next = new ListNode(2)

const l2 = new ListNode(1)
l2.next = new ListNode(1)
l2.next.next = new ListNode(2)
l2.next.next.next = new ListNode(3)
l2.next.next.next.next = new ListNode(3)


console.log(deleteDuplicates(l))
console.log(deleteDuplicates(l2))



/* const deleteDuplicates = (head) => {
    let newNode = new ListNode("dummy");
    let current = newNode;
    let headHash = {};

    while (head) {
        if (headHash[head.val] === undefined) {
            if (newNode.next === null) {
                newNode.next = new ListNode(head.val);
            } else {
                newNode = newNode.next;
                newNode.next = new ListNode(head.val);
            }
        }
        // headHash = (headHash[head.val] || 0) + 1 // <- offending line
        headHash[head.val] = newNode; // You need to assign the current node to the hash you've created
        head = head.next;
    }
    return current.next;
}; */

/* const deleteDuplicates = (head) => {
    let newNode = new ListNode('dummy')
    let current = newNode
    let headHash = []

    while (head) {
        if (headHash.indexOf(head.val) === -1) {
            if (newNode.next === null) newNode.next = new ListNode(head.val)
            else {
                newNode = newNode.next
                newNode.next = new ListNode(head.val)
            }
        }
        headHash.push(head.val)
        console.log(headHash, head.val);
        head = head.next

    }
    return current.next
}
 */
