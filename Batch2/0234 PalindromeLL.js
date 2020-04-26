
/* Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

https://www.youtube.com/watch?v=vHam6riSavo&feature=youtu.be
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const isPalindrome = head => {
//   let current = head
//   let results = []
//   let reversed
//   while (current) {
//     results.push(current.val)
//     current = current.next
//   }
//   reversed = results.reduce((rev, char) => char + rev, '')
//   return reversed === results.join('')
// }


const isPalindrome = head => {
    let fast = head
    let slow = head
    //find the middle of the nodes
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    //start fast back up at the head
    fast = head //still includes the midpoint, but doesn't matter bc we use slow
    slow = reversedLL(slow) //reverse from the midpoint

    while (slow) {
        //compare each of the values
        if (slow.val !== fast.val) return false
        slow = slow.next
        fast = fast.next
    }
    return true
}

const reversedLL = head => {
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


const l1 = new ListNode(1)
l1.next = new ListNode(2)

const l2 = new ListNode(1)
l2.next = new ListNode(2)
l2.next.next = new ListNode(2)
l2.next.next.next = new ListNode(1)

console.log(isPalindrome(l1)) // false
console.log(isPalindrome(l2)) // true