class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : []
    }
    add(child) {
        this.children.push(child);
    }
}

const deserializeLevelOrderRepresentation = (arr) => {
    // Convert all items to nodes except for null
    const items = arr.map(val => val === null ? null : new Node(val));
    let root;
    // Since this is level order, we need two queues, basically a queue will represent a level
    let queue = [];
    let nextQueue = [];
    // this will be a node to add the children to
    let currentParent;
    // Now we have to put them into a tree
    let node = items.shift();
    while (typeof node !== 'undefined') {
        // We need a root to hold onto
        if (!root) {
            // We don't have a root, so it's the first node
            root = node;
            // Everything gets added to the 
            currentParent = root;
            nextQueue.push(root);
            node = items.shift();
            continue;
        }
        // If the queue is empty, then that means we'll move on to the next level
        if (!queue.length) {
            queue = nextQueue;
            nextQueue = [];
        }
        // If the node is null, then that means we're at the end of a group
        if (node === null) {
            // If the node is null, then that means we need to add to a new parent
            currentParent = queue.shift();
            // Grab the next node
            node = items.shift();
            // We'll restart the loop, and the conditional block above this one will
            // move to the next queue if this queue is empty
            continue;
        }
        // Add the node as a child to the current parent
        currentParent.add(node);
        // Add in this node as a possible parent to the next queue
        nextQueue.push(node);
        // grab the new node
        node = items.shift();
    }
    return root;
}

const tree3 = deserializeLevelOrderRepresentation([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14])

console.log(tree3);