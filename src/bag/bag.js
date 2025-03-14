// 01 背包案例
/**
 * 二维数组背包问题
 * @param {number[]} weight 物品重量数组
 * @param {number[]} value 物品价值数组
 * @param {number} size 背包容量
 */
function testWeightBagProblem(weight, value, size) {
  const len = weight.length
  // 定义dp[i][j] i为[0-i]个物品范围内，j为剩余背包容量。
  // y轴代表的是物品编号，x轴代表的是背包剩余容量
  // 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大为 dp[i][j]
  const dp = Array.from({ length: len }).fill().map(_ => Array.from({ length: size + 1 }).fill(0))

  // 初始化第一行能装得下物品的 dp 数组，由于选择范围只有 第 1 个物品
  // 所以只要第 1 个物品重量小于 背包size ，就可以全部一起初始化为 value[0]
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0]
  }

  // 遍历物品，注意，物品编号需要从1开始。物品为 0 的编号已经被初始化了。还有一个就是 dp[0][j] 无法被递推
  // 因为 dp[0 - 1][j] 越界了
  // 因为递归公式主要依靠的是左上角的元素，这里二维数组将所有信息都保存下来了，所以，这里的物品和背包的遍历先后顺序不影响，因为都能事先把左上角的元素给获取出来
  for (let i = 1; i < len; i++) {
    // 遍历背包容量
    // TODO 感觉物品总量可以从 1 开始，因为没有物品重量为 0 的
    for (let j = 0; j <= size; j++) {
      // 剩余背包容量不足以放入此物品，则i直接减1（意思是直接去1至i - 1的物品中查找合适的能放入进来的物品）
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j]
        continue
      }
      // 剩余容量可以放下此物品，此时有两个选择，放或者不放，所以需要取其最大值
      // 不放，缩小查找范围至i - 1即可，所剩背包容量也不需要改变，价值也不变。dp[i - 1][j]
      // 放，缩小查找范围至i - 1，所剩背包容量需要减去当前物品的重量（j - weight[i - 1]）（记忆化搜索，利用先前已经得出的结果），并且加上当前物品的价值
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
    }
  }
  console.table(dp)
  // 最终进行返回
  return dp[len - 1][size]
}

// 一维数组dp
function testWeightBagProblem2(weight, value, size) {
  // dp[j]的含义是重量为j的背包最多可以装下价值为 dp[j] 的物品
  // 这里赋值成正数的最小值，不对其他值产生影响
  // let dp = new Array(size + 1).fill(0);

  // （先遍历物品后遍历背包，且背包必须得倒序遍历：正确解法）
  // 物品作为 y 轴，背包容量作为 x 轴。先物品，后背包的话，顺序就是先 y 轴，后 x 轴遍历。这样就能保证当前值的左上方的值是已经被计算过了的
  // 可以画图参考下
  for (let i = 0; i < weight.length; i++) {
    // 后遍历背包（这里倒序遍历主要需要保证物品只被放入了一次，状态转移方程中使用的是上一层的数据）
    // 后面的值要用到前面的值，所以要保证前面的值是先前的，这里得用倒序来防止覆盖
    for (let j = size; j > 0 && j >= weight[i]; j--) {
      // 滚动数组主要是使用了值复用，当遍历到当层的时候再把旧值给覆盖
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
  }

  // 先遍历背包后遍历物品（错误解法）
  // 这样让每个背包只放入了一个物品，因为前面的值没有被初始化，dp[i - weight[j]] + value[j] 的值将会一直是 value[i]
  // for (let i = size; i > 0; i--) {
  //   for (let j = 0; j < weight.length; j++) {
  //     // 当背包容量大于物品重量的时候可以选择放入背包
  //     if (i > weight[j]) {
  //       // 先遍历背包，后遍历物品（由于背包前面的值没有初始化，所以dp[i - weight[j]]的值都是为0的，这样导致的结果就是dp[i - weight[j]] + value[j] 的结果一直都是value[j]，也就是每个容量的背包只放入了一个物品，这种结果是一定错误的）
  //       dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
  //     }
  //   }
  // }

  return dp[size]
}

function test() {
  console.log(testWeightBagProblem2([1, 3, 4, 5], [15, 20, 30, 55], 6))
}
test()
