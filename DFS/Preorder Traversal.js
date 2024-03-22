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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let array = [];
    function dfs(node) {
        if(!node) return;
        array.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return array;
};