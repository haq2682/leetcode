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
 * @return {string}
 */
let result;
var tree2str = function(root) {
    result = '';
    dfs(root);
    return result;
};

function dfs(node) {
    if(node === null) return;
    result += node.val.toString();
    if(node.left || node.right) {
        result += '(';
        dfs(node.left);
        result += ')';
    }
    if(node.right) {
        result += '(';
        dfs(node.right);
        result += ')';
    }
}