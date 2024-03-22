/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let array = [];
    function dfs(node) {
        if(!node) return;
        for(child of node.children) {
            dfs(child);
        }
        array.push(node.val);
    }
    dfs(root);
    return array;
};