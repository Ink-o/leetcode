/**
 * k神题解（推荐）
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const x = matrix[0].length
  const y = matrix.length

  // 单独维护上下左右边界
  let l = 0
  let r = x - 1
  let t = 0
  let b = y - 1
  // 维护遍历总数
  const sum = x * y
  let count = 1
  const arr = []

  // 注意，n * m 的方格不规则，在 count === sum 的情况下，不一定所有边界都是满足情况的，需要在每个 for 里面都单独判断下 count 是否大于 sum
  while (count <= sum) {
    // l -> r
    for (let i = l; i <= r && count <= sum; i++) {
      arr.push(matrix[t][i])
      count++
    }
    t++
    // t -> b
    for (let i = t; i <= b && count <= sum; i++) {
      arr.push(matrix[i][r])
      count++
    }
    r--
    // r -> l
    for (let i = r; i >= l && count <= sum; i--) {
      arr.push(matrix[b][i])
      count++
    }
    b--
    // b -> t
    for (let i = b; i >= t && count <= sum; i--) {
      arr.push(matrix[i][l])
      count++
    }
    l++
  }
  return arr
}
console.log(spiralOrder([[]]))

/**
 * 随想录题解
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder1(matrix) {
  const list = []
  if (!matrix || matrix.length === 0) {
    return list
  }
  const xLength = matrix[0].length
  const yLength = matrix.length
  let i = 0
  // 统计矩阵从外向内的层数，如果矩阵非空，那么它的层数至少为一层
  const count = Math.floor((Math.min(xLength, yLength) + 1) / 2)
  while (i < count) {
    // yLength - 1 - i 是指随着层数增加时，层数的边界所在行（即最上行和最下行的所处的行数），如果出现最上行和最下行是同一行的情况（比如：3行5列的矩阵中，第二层是1行3列的矩阵），此时按顺序打印完第二层第一行后，第一列为空，不打印，折返后如果没有（m - 1 - i != i）这个限制，会重新打印第二层的第一行，造成结果的值变多。同理可得，n - 1 - i != i。

    // 尾部的行：m - i -1
    // 最右边的列：n - i - 1

    // 准则：左闭右闭，都需要达到所能到达的最大范围
    // 列移动：关联的是xLength
    // 行移动：关联的是yLength

    // 从左往右，j为变化列(左闭右开，没有达到最后一列)
    for (let j = i; j < xLength - i; j++) {
      list.push(matrix[i][j])
    }

    // 从上往下，j为变化行，(xLength - 1) - i为最后一列
    // 左闭右闭，到达最后一行
    for (let j = i + 1; j < yLength - i; j++) {
      // xLength - 1 - i   最后一列
      list.push(matrix[j][(xLength - 1) - i])
    }

    // 从右往左，j为变化列
    // (xLength - 1) - (i + 1)，n - 1 - i是最后一列。这里的i + 1是为了去除最右下角的那个数(上层已经走过了)
    // yLength - 1 - i !== i 用来保证遍历的这一行没有重复，因为此时正在遍历的是最后一行
    // 左闭右闭，到达第一列
    for (let j = xLength - 1 - i - 1; j >= i && (yLength - 1 - i !== i); j--) {
      // yLength - 1 - i：最后一行
      list.push(matrix[yLength - 1 - i][j])
    }

    // 从下往上
    // yLength - 1 - i为最后一行， +1是为了去除左下角的数
    // (xLength - 1 - i !== i)为了保证遍历的这列没有重复
    // i是固定列，j是变化行
    // 左闭右闭，达到边界的第二行
    for (let j = (yLength - 1) - (i + 1); j >= i + 1 && (xLength - 1 - i !== i); j--) {
      list.push(matrix[j][i])
    }
    i++
  }
  return list
}
// console.log(spiralOrder2([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]]));
