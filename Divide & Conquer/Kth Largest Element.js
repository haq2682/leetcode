/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let sorted = mergeSort(nums);
    return sorted[k-1];
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
        if(left[i] > right[j]) sorted.push(left[i++]);
        else sorted.push(right[j++]);
    }

    while(i < left.length) sorted.push(left[i++]);
    while(j < right.length) sorted.push(right[j++]);

    return sorted;
}