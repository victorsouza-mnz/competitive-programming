//https://leetcode.com/problems/binary-tree-level-order-traversal/


var levelOrder = function(root) {
    if(!root) return []
    let resp = []
    let q = [root]
    while(q.length) {
        let length = q.length, count = 0
        const currentLevelValues = []
        while (count < length) {
            const currnode = q.shift()
            currentLevelValues.push(currnode.val)
            count++
            if (currnode.left) q.push(currnode.left)
            if (currnode.right) q.push(currnode.right)
        }
        resp.push(currentLevelValues)
    }
    return resp
};