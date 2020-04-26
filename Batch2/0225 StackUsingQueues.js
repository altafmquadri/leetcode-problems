/* Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack). */


class MyStack {
    constructor() {
        this.queue1 = []
    }
    push(val) {
        this.queue1.push(val)
    }
    pop() {
        return this.queue1.splice(-1)[0]
    }
    top() {
        return this.queue1.slice(-1)[0]
    }
    empty() {
        return this.queue1.length === 0
    }
}

// class MyStack {
//     constructor() {
//         this.queue1 = []
//         this.queue2 = []
//     }
//     push(val) {
//         this.queue1.push(val)
//     }
//     pop() {
//         if (!this.queue1.length) return null

//         while (this.queue1.length > 1) {
//             this.queue2.push(this.queue1.shift())
//         }

//         let item = this.queue1.shift()

//         while (this.queue2.length) {
//             this.queue1.push(this.queue2.shift())
//         }
//         return item
//     }
//     top() {
//         let item = this.pop()
//         this.queue1.push(item)
//         return item
//     }
//     empty() {
//         if (!this.queue1.length) return true
//         else return false
//     }
// }

const stack = new MyStack();

stack.push(1)
stack.push(2)
console.log(stack.top())   // returns 2
console.log(stack.pop())   // returns 2
console.log(stack.empty()) // returns false