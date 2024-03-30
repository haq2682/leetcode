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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    else if(!root.left && !root.right) return [root.val.toString()];
    else {
        let left = binaryTreePaths(root.left).map(val => root.val + '->' + val);
        let right = binaryTreePaths(root.right).map(val => root.val + '->' + val);
        return [...left, ...right];
    }
};