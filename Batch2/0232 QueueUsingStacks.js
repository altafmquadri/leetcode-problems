/* Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue). */


class MyQueue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    push(val) {
        this.s1.push(val)
    }
    peek() {
        if (!this.s1.length) return null
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
        let item = this.s2.pop()
        this.s2.push(item)
        while (this.s2.length) {
            this.s1.push(this.s2.pop())
        }
        return item
    }
    pop() {
        if (!this.s1.length) return null
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
        let item = this.s2.pop()
        while (this.s2.length) {
            this.s1.push(this.s2.pop())
        }
        return item
    }
    empty() {
        return this.s1.length === 0
    }
}

const queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.peek())
console.log(queue.pop())
console.log(queue.empty())