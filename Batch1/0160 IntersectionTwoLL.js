
/* Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:
begin to intersect at node c1.
Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.


Example 2:

Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.


Example 3:

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory. 

Resource: https://www.youtube.com/watch?v=c7dOI-hDa2Q&feature=youtu.be
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null
    let pointer1 = headA
    let pointer2 = headB

    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next

        if (pointer1 === pointer2) return pointer1
        if (!pointer1) pointer1 = headB
        if (!pointer2) pointer2 = headA
    }
    return pointer1
}

//example 1
const listA = new ListNode(4)
listA.next = new ListNode(1)
listA.next.next = new ListNode(8)
listA.next.next.next = new ListNode(4)
listA.next.next.next.next = new ListNode(5)

const listB = new ListNode(5)
listB.next = new ListNode(0)
listB.next.next = new ListNode(1)
listB.next.next.next = listA.next.next
listB.next.next.next.next = listA.next.next.next
listB.next.next.next.next.next = listA.next.next.next.next

//example 2
const listC = new ListNode(0)
listC.next = new ListNode(9)
listC.next.next = new ListNode(1)
listC.next.next.next = new ListNode(2)
listC.next.next.next.next = new ListNode(4)

const listD = new ListNode(3)
listD.next = listC.next.next.next
listD.next.next = listC.next.next.next.next

//example 3
const listE = new ListNode(2)
listE.next = new ListNode(6)
listE.next.next = new ListNode(4)

const listF = new ListNode(1)
listF.next = new ListNode(5)


console.log(getIntersectionNode(listA, listB)) //8
console.log(getIntersectionNode(listC, listD)) //2
console.log(getIntersectionNode(listE, listF)) //null