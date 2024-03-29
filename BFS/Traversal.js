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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [];
    let result = [];
    queue.push(root)

    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(node) {
                level.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        result.push(level);
    }
    return result;
};