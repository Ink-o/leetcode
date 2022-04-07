/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let mid,
        left = 0,
        right = nums.length, 
        index = -1;
    while (left < right) {
        mid = Math.floor(left + ((right - left) / 2));
        if (nums[mid] > target) {
            index = mid;
            right = mid;
        } else if (nums[mid] < target) {
            index = mid + 1;
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return index;
};
console.log(searchInsert([1,3,5,6], 2));