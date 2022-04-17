/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let curIndex = 0;
    let nextIndex = 0;
    // 终点是百分百可以到达的，所以索引不需要到达最后一个
    for (let i = 0; i < nums.length - 1; i++) {
        // 更新下一步的最大覆盖范围
        nextIndex = Math.max(nextIndex, i + nums[i]);
        // 只需要关注当前i是否到达了当前最大覆盖范围然后更新最大覆盖即可，如果i 可以到达 nums.length - 1 位置
        // 那么这里会进行重复计算
        if (i === curIndex) {
            step++;
            curIndex = nextIndex;
        }
    }
    return step;
};