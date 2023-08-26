/**
 * @param {number[]} nums
 * @return {number}
 * 贪心
 */
// var wiggleMaxLength = function (nums) {
//   if (nums.length <= 1) {
//     return nums.length;
//   }
//   let result = 1; // 默认值为1，当长度大于等于1的时候，最小值至少为1
//   let preDiff = 0; // 上个差值
//   let curDiff = 0; // 现在的差值

//   for (let i = 0; i < nums.length - 1; i++) {
//     // 计算实时的diff
//     curDiff = nums[i + 1] - nums[i];
//     // 当满足curDiff和preDiff任一个大于0和小于0的时候，结果值+1
//     if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
//       result++;
//       // 更新preDiff
//       preDiff = curDiff;
//     }
//   }
//   return result;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const n = nums.length
  if (n < 2) return n
  // up[i] 记录以i截止的上升摆动的最大长度（最后一个上升的元素不一定在i）
  const up = new Array(n).fill(0)
  // down[i] 记录以i截止的下降摆动的最大长度（最后一个下降的元素不一定在i）
  const down = new Array(n).fill(0)
  up[0] = down[0] = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 上升摆动
      // 情况1：连续的上升，不用当前元素，沿用之前的上升摆动长度值
      // 情况2：上升过程，从上一个下降摆动过来 + 当前元素 成为上升摆动
      up[i] = Math.max(up[i - 1], down[i - 1] + 1)
      // 上升过程中，下降摆动并未变化，所以沿用之前的值
      down[i] = down[i - 1]
    } else if (nums[i] < nums[i - 1]) {
      // 下降摆动
      // 情况1：连续的下摆，不用当前元素，沿用之前的下降摆动长度值
      // 情况2：下降过程，从上一个上升摆动过来 + 当前元素，成为下降摆动
      down[i] = Math.max(down[i - 1], up[i - 1] + 1)
      // 下升过程中，上升摆动并未变化，所以沿用之前的值
      up[i] = up[i - 1]
    } else {
      //!既不是上升也不是下降，直接沿用直接的值 
      up[i] = up[i - 1]
      down[i] = down[i - 1]
    }
  }
  return Math.max(up[n - 1], down[n - 1])
};

/**
 * 上一个dp的简化版，先看上面的dp解法，这里是优化了up和down的内存
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 1) return 1;
  // i 以及之前的下摆最长长度
  let down = 1;
  // i 以及之前的上升最长长度
  let up = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      // 下降
      // 情况1：从上一个上升的节点摆动过来，所以 up + 1
      // 情况2：从上一个下降的节点摆动过来，连续下降
      down = Math.max(up + 1, down);
    }
    if (nums[i] > nums[i - 1]) {
      // 上升
      // 情况1：从上一个上升的节点摆动过来，连续上升
      // 情况2：从上一个下降的节点摆动过来，所以 down + 1
      up = Math.max(down + 1, up)
    }
  }
  // 最后取前 i 个 上升/下降的最大值
  return Math.max(down, up);
}
console.log(wiggleMaxLength([1, 2, 3]));