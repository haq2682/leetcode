/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let answer = [];
    function dfs(node) {
        if(!node) {
            answer.push('null');
            return;
        }
        answer.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return answer.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split(',');
    let iterator = 0;
    function dfs() {
        if(values[iterator] === 'null') {
            iterator++;
            return null;
        }
        let node = new TreeNode(Number(values[iterator]));
        iterator++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */