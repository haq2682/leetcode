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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let queue = [root];
    let depth = 1;
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let shifted = queue.shift();
            if(!shifted.right && !shifted.left) return depth;
            if(shifted.left) queue.push(shifted.left);
            if(shifted.right) queue.push(shifted.right);
        }
        depth++;
    }
};