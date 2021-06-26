//https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(node, currdepth = 0) {
    if (!node) return currdepth
    currdepth++
    return Math.max(maxDepth(node.left, currdepth), maxDepth(node.right, currdepth))
};