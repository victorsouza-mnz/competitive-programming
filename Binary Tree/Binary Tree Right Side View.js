//https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
    if(!root) return []
    let resp = []
    let q = [root]
    while(q.length) {
        let length = q.length, count = 0, currnode
        while (count < length) {
            currnode = q.shift()
            count++
            if (currnode.left) q.push(currnode.left)
            if (currnode.right) q.push(currnode.right)
        }
        resp.push(currnode.val)
    }
    return resp
};
