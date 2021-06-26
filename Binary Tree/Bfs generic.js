
let bfs = function ( root) {
    res = []
    q = [root]
    while (q.length) {
        node = q.shift()
        res.push(node.val)
        if(node.left) q.push(node.left)
        if (node.right) q.push(node.right)
    }
    console.log(res)
    return res
}

