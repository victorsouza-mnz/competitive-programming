//https://leetcode.com/problems/count-complete-tree-nodes/

let calcNumberOfNodes = function (node) { 
    let left_h = 0
    let right_h = 0
    let start = node
    while (start) {
        left_h++
        start = start.left
    }

    start = node
    while (start) {
        right_h++
        start = start.right
    }
    
    console.log({left_h, right_h})
    if (left_h === right_h) {
        return Math.pow(2,left_h) - 1
    } else {
        return 1 + calcNumberOfNodes(node.left) + calcNumberOfNodes(node.right)
    }
}


var countNodes = function(root) {
    
    if (!root) return 0
    if(!root.right && !root.left) return 1

    return calcNumberOfNodes(root)


};