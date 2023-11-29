/**
 * 动态规划
 * @param {number[]} nums
 * @return {number[]}
 */
var statisticalResult = function (nums) {
  let dp = []
  // l：数组 0 索引左边初始数
  // r：数组 尾部 索引右边初始数
  let l = 1, r = 1
  // 算出除了 i 左边的乘积
  for (let i = 0; i < nums.length; i++) {
    dp[i] = l
    // i及左边总乘积累加，这里是乘以 nums[i]
    l *= nums[i]
  }

  // 算出除了 i 总的乘积
  for (let j = nums.length - 1; j >= 0; j--) {
    // 总成绩为 左边累计乘积 * 右边累计乘积
    dp[j] = dp[j] * r
    // i及右边总乘积累加，这里是乘以 nums[i]
    r *= nums[j]
  }

  return dp
};
statisticalResult([1, 2, 3, 4])