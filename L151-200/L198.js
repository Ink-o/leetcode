/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 数组长度
  const len = nums.length;

  // dp[i] 的意思是考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]。
  const dp = [
    nums[0], // 第一天只能选择偷
    Math.max(nums[0], nums[1]) // 第二步可以选择第一步偷还是第二步偷
  ];

  for (let i = 2; i < len; i++) {
    // 取值有两种方式，一种是取i - 1的值（因为i - 1的值是相邻的，所以不允许加上当前nums[i]的值）（不偷）
    // 另外一种是取i - 2的值 + 当前nums[i]的值（偷）
    // 取这两种方法获取值的最大值
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[len - 1];
};
console.log(rob([1, 2, 3, 1]));