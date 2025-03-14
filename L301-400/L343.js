/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  // dp[i] 表示 i 值拆分的最大整数为 dp[i]
  // 先将dp数组中的值全部初始化为0，严格上来说，0、1位置的数字是不应该被初始化的，因为没有意义，0、1 是无法被拆分的
  // 这里是为了方便，就直接初始化为 0 了
  const dp = Array.from({ length: n + 1 }).fill(0)
  // 2 位置初始化为1
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) { // 防止越界，界限设定小于i
      // dp[i]可能会涉及到多次更改，需要保证每次的dp[i]都是最大的，所以自然需要参与到比较中
      // 状态转移方程：
      // 有两种方式计算出结果：
      // 1、(i - j) * j  拆成 2 个数，(i - j)部分不进行拆分
      // 2、dp[i - j] * j，将 [i - j] 拆成多个数，可能是 3 个数以上
      // （这个意思就是相当于 i - j 进行了拆分计算，因为之前已经进行计算过了），这个过程也相当于把 j 进行了拆分
      // dp[i] 会经过多次拆分，所以这里需要将以前的也对比一下
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
    }
  }
  return dp[n]
}
console.time('t1')
console.log(integerBreak(4))
console.timeEnd('t1')
