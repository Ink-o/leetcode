/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => {
        return Math.abs(b) - Math.abs(a);
    });
    let result = 0;
    nums.forEach((ele, i) => {
        if (ele < 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
        result += nums[i];
    });
    if (k & 1 == 1) {
        nums[nums.length - 1] *= -1;
        result += 2 * nums[nums.length - 1];
    }
    return result;
};