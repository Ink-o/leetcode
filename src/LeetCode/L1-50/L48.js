/**
 * https://leetcode.cn/problems/rotate-image/solutions/1228078/48-xuan-zhuan-tu-xiang-fu-zhu-ju-zhen-yu-jobi/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const n = matrix.length
  // 外层循环，例如一个 5 x 5 的矩阵需要处理 3 次
  // 分别是 5、3、1（每次会处理 2 层）
  // 假设矩形为 4 x 4，那么旋转点为左上角 4 个方块
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // 内层循环，处理每层的元素，为了处理奇数的情况，这里边界设置为 (n + 1) / 2
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      // 暂存 A 至 tmp
      const tmp = matrix[i][j]
      // 元素旋转操作 A <- D <- C <- B <- tmp
      // 推导公式：matrix[i][j]←matrix[n−1−j][i]←matrix[n−1−i][n−1−j]←matrix[j][n−1−i]←tmp

      // ⭐️这些下标很难记忆，一定得画图看 i、j 变化时，A、B、C、D 点是怎么变的
      // A <- D（i 点坐标一定为 i,j）
      matrix[i][j] = matrix[n - 1 - j][i]
      // D <- C
      // c 的 x 坐标与 i 相关，x 坐标为 n - 1 - i
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
      // C <- B
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
      // B <- tmp
      matrix[j][n - 1 - i] = tmp
    }
  }
}
