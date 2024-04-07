/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let array = convertToArray(head);
    function helper(left, right) {
        if(left > right) return null;
        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode([array[mid]]);
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        return root;
    }
    return helper(0, array.length - 1);
};

function convertToArray(node) {
    if(!node) return [];
    let temp = node;
    let result = [];
    while(temp) {
        result.push(temp.val);
        temp = temp.next;
    }
    return result;
}