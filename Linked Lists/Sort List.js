/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    let array = [];
    let temp = head;
    while(temp) {
        array.push(temp.val);
        temp = temp.next;
    }
    array = mergeSort(array);
    let newList = new ListNode(0);
    let curr = newList;
    array.forEach(function(element, index) {
        curr.next = new ListNode(element);
        curr = curr.next;
    });

    return newList.next;
};

function mergeSort(array) {
    if(array.length <= 1) return array;

    let mid = Math.floor(array.length/2);
    let leftHalf = mergeSort(array.slice(0, mid));
    let rightHalf = mergeSort(array.slice(mid));

    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let sorted = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) sorted.push(left[i++]);
        else sorted.push(right[j++]);
    }

    while(i < left.length) sorted.push(left[i++]);
    while(j < right.length) sorted.push(right[j++]);

    return sorted;
}

