/**
 * 当当前剩余油量小于0时，更新起点为 i+1，达到局部更新。一轮起来就是全局最优了
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let all = 0; // 总剩余油量
  let start = 0; // 开始位置初始化为0
  let cur = 0; // 当前剩余油量
  for (let i = 0; i < gas.length; i++) {
    // 更新当前剩余油量
    cur += (gas[i] - cost[i]);
    // 更新总剩余油量
    all += (gas[i] - cost[i]);
    // 当当前剩余油量小于0，那么重置当前剩余油量为0，并且更新起始位置为 i + 1，因为当前的已经不满足了
    if (cur < 0) {
      // 当前剩余油量更改为 0
      cur = 0;
      // 更新 start 起点 为 i + 1，因为当前的 i 一定是不满足条件的。cur 小于 0 是不允许的
      start = i + 1
    }
  }
  // 如果总剩余油量小于0，则直接返回-1
  if (all < 0) return -1;
  return start;
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));