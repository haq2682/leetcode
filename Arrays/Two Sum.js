/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let object = {};
    for(let i = 0; i < nums.length; i++) {
        if(target - nums[i] in object) {
            return [i, object[target - nums[i]]];
        }
        object[nums[i]] = i; 
    }
};