/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return head;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let previous = null;
    let current = slow.next;
    while(current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    slow.next = null;
    let h = head;
    let prev = previous;
    while(h && prev) {
        let next1 = h.next;
        let next2 = prev.next;
        h.next = prev;
        prev.next = next1;
        h = next1;
        prev = next2;
    }
};