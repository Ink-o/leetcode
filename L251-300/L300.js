/**
 * 思路：两层循环判断是否递增，使用 dp 来进行记忆化搜索
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp[i] 表示 i 之前的最长递增子序列长度，因为最短递增子序列都为1，所以全部初始化为1
  let dp = new Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 对比值比当前值大的时候就可以进行值更新了
      if (nums[i] > nums[j]) {
        // 更新 最长递增子序列 长度
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 更新最终结果最大长度
    result = Math.max(result, dp[i]);
  }
  return result;
}

/**
 * 贪心 + 二分查找替换
 * 这里的二分查找替换主要是替换比当前值要小
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 子序列上升高度
  let len = 1
  // 当前序列数组
  let d = Array(nums.length + 1).fill(0)
  d[1] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i]
    } else {
      // 这里是针对 d 来进行的二分查找，得注意左右边界
      // l 起点为 1，r 结束点为 len
      // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设置为 0
      let l = 1, r = len, pos = 0
      // 找到最后一个比 nums[i] 小于等于的数值，然后替换掉它下一个的值，也就是第一个比它大的值
      while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        // 这里是只要小于都进行覆盖值
        if (d[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      // 在最后一个比 nums[i] 小的数值上索引加一替换值
      d[pos + 1] = nums[i]
    }
  }
  return len
}