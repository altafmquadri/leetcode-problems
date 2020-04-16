/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2. */

class MinStack {
    constructor() {
        this.values = []
        this.minimums = []
    }
    push(val) {
        this.values.push(val)
        if (!this.minimums.length) this.minimums.push(val)
        else this.minimums.push(Math.min(this.minimums.slice(-1)[0], val))
    }
    pop() {
        return this.values.length ? (this.values.pop(), this.minimums.pop()) : null
    }
    top() {
        return this.values.length ? this.values[this.values.length - 1] : null
    }
    getMin() {
        return this.minimums.slice(-1)[0]
    }
}

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())//Returns -3
minStack.pop()
console.log(minStack.top())//Returns 0
console.log(minStack.getMin())//Returns -2