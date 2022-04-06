/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) return 0;
    let curDistance = 0; // 当前覆盖最远距离下标
    let ans = 0; // 需要走的步数
    let nextDistance = 0; // 下一步覆盖最远距离下标
    for (let i = 0; i < nums.length; i++) {
        nextDistance = Math.max(nums[i] + i, nextDistance); // 更新下一步覆盖最远距离下标
        if (i == curDistance) {
            if (curDistance != nums.length - 1) {
                ans++;
                curDistance = nextDistance;
                if (nextDistance >= nums.length - 1) break;
            } else {
                break;
            }
        }
    }
    return ans;
};