//https://leetcode.com/problems/binary-tree-right-side-view/




const dfs = function (node, level, result) {
    if (!node) return
    if (level >= result.length) {
        result.push(node.val)
    }
    if (node.right) {
        dfs(node.right, level+1, result)
    }
    if (node.left) {
        dfs (node.left, level+1, result)
    }
}
    

var rightSideView = function(root) {
    const result = []
    dfs(root, 0, result)
    return result
};
