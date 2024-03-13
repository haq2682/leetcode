/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let answer = null;
    for(i = 0; i < lists.length; i++) {
        answer = merge(answer, lists[i]);
    }
    return answer;
};

let merge = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    if(l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    }

    else {
        l2.next = merge(l2.next, l1);
        return l2;
    }
}