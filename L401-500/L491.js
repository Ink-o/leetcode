/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let cur = [];
    let res = [];
    const len = nums.length;
    return progress(0);
    function progress(startIndex) {
        if (startIndex == len) {
            if (cur.length >= 2) {
                res.push(cur.slice());
            }
            return;
        }
        for (let i = startIndex; i < len; i++) {
            if (!isAsc(cur, nums[i])) continue;
            cur.push(nums[i]);
            progress(i + 1);
            cur.pop();
        }
        return res;
    }
};
function isAsc(nums, add) {
    if (nums.length == 0 || nums[nums.length - 1] <= add) {
        return true;
    }
    return false;
}
console.log(findSubsequences([4,4,3,2,1]));