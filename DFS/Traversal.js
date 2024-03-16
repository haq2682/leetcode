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
var inorderTraversal = function(root) {
    let array = [];
    dfs(root, array);
    return array;
};

function dfs(node, array) {
    if(node !== null) {
        dfs(node.left, array);
        array.push(node.val);
        dfs(node.right, array);
    }
}