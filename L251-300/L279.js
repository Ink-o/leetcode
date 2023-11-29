/**
 * @param {number} n
 * @return {number}
 * 背包在外，物品在内
 */
var numSquares = function (n) {
  // dp[i] 的含义为组成 i 这个数最少有dp[i]的数组成
  let dp = new Array(n + 1).fill(Infinity);
  // 第0项默认初始化为0
  dp[0] = 0;

  // 由于题目中没有要求排列或者组合，所以背包在外层循环或在内层循环都可以
  // 背包在外层循环
  for (let i = 1; i <= n; i++) {
    // 这里的物品就是从0开始算起，其平方数不大于背包数值的数字
    // 这里的j * j将相当于物品的重量了
    // 这里的物品重量要计算好，否则将会漏掉某些区间
    for (let j = 1; j * j <= i; j++) {
      // 这里物品价值就是 +1，代表组合成功了
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}

/**
 * @param {number} n
 * @return {number}
 * 背包在内，物品在外
 */
var numSquares = function (n) {
  // dp[i] 的含义为组成 i 这个数最少有dp[i]的数组成
  let dp = new Array(n + 1).fill(Infinity);
  // 第0项默认初始化为0
  dp[0] = 0;

  // 由于题目中没有要求排列或者组合，所以背包在外层循环或在内层循环都可以
  // 物品在外层循环(平方数小于n的都属于物品)，这里的i * i就是物品的重量
  for (let i = 1; i * i <= n; i++) {
    let val = i * i;
    // 背包的起始值为 i * i
    for (let j = val; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - val] + 1);
    }
  }
  return dp[n];
}