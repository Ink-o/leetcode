/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = undefined;
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        cur = cur + nums[i];
        // 如果当前值比总数要大，那么就将这个值给记录下来
        if (cur > result || typeof result == 'undefined') {
            result = cur;
        }
        // 当前值小于0的时候，马上置为0，重新开始计算
        if (cur <= 0) {
            cur = 0;
        }
    }
    return result;
};
console.log(maxSubArray([-2, -1]));