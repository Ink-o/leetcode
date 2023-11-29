/**
 * 二维数组解法
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  // dp[i][j] 表示在第 i 行，第 j 列的最小和
  let dp = Array(m).fill(0).map(() => Array(n).fill(0))

  // 初始化第一列的值
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      // 超过第一列的时候，直接进行值累加
      dp[0][i] = dp[0][i - 1] + grid[0][i]
      continue
    }
    // 第 0 列直接取其值
    dp[0][i] = grid[0][i]
  }

  // 初始化第一行的值
  for (let i = 0; i < m; i++) {
    if (i > 0) {
      // 超过第一行的时候，直接进行值累加
      dp[i][0] = dp[i - 1][0] + grid[i][0]
      continue
    }
    // 第 1 行直接取其值
    dp[i][0] = grid[i][0]
  }

  // 行
  for (let i = 1; i < m; i++) {
    // 列
    for (let j = 1; j < n; j++) {
      // 对比正上方和左边的值，取最小值来和当前值进行累加
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[m - 1][n - 1]
};

/**
 * 一维数组解法
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // dp[i] 表示在第 i 列，它的最小值是多少
  let dp = Array(n)

  // 初始化第一行的值
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      dp[i] = dp[i - 1] + grid[0][i]
      continue
    }
    dp[i] = grid[0][i]
  }

  // 行
  for (let i = 1; i < m; i++) {
    // 列
    for (let j = 1; j < n; j++) {
      // 当遇到第一列时，初始化按照上面二维数组的列方式来进行初始化（因为第 0 列的值总是固定的）
      if (j === 0) {
        dp[j] = dp[j] + grid[i][j]
        continue
      }
      // 对比正上方和左边的值，取最小值来和当前值进行累加
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
    }
  }
};