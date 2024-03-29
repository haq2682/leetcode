/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[x - 1]) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};