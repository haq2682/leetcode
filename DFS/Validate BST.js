/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let previousNode = null;
    function dfs(node) {
        if(!node) return true;
        var resultFromRight = dfs(node.right);
        if(!resultFromRight) return false;
        if(previousNode && node.val >= previousNode.val) return false;
        previousNode = node;
        return dfs(node.left);
    }
    return dfs(root);
};
