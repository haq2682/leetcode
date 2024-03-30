/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(!nums) return 0;
    let count = 0;
    let major = 0;
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) major = nums[i];
        if(major === nums[i]) count++;
        else count--;
    }
    return major;
};