/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let array = [];
    let reverse = [];
    let temp = head;
    while(temp) {
        array.push(temp.val);
        temp = temp.next;
    }
    for(let i = 0; i < array.length; i++) {
        reverse[i] = array[(array.length-1) - i];
    }
    return (JSON.stringify(array) == JSON.stringify(reverse));
};