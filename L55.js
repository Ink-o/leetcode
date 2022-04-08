/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length == 1) return true;
    let range = 0;
    for (let i = 0; i <= range; i++) {
        range = Math.max(range, i + nums[i]);
        if (range >= nums.length - 1) {
            return true;
        }
    }
    return false;
};
console.log(canJump([3,2,1,0,4]));