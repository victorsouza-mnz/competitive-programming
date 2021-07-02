//https://leetcode.com/problems/validate-binary-search-tree/



const dfs = function (root, min, max) {
    if(!root) return true
    if (root.val <= min || root.val >= max) return false

    return (dfs(root.left, min, root.val) && dfs(root.right, root.val, max))
}


var isValidBST = function(root) {
    if (!root) return true

    return dfs(root, -Infinity, Infinity)

};

