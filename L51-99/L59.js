/**
 * k神 题解：推荐看这个，简洁
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix1 = function (n) {
  let l = 0, r = n - 1, t = 0, b = n - 1
  let mat = Array.from(new Array(n), () => [])
  let num = 1, tar = n * n

  while (num <= tar) {
    // left -> right
    for (let i = l; i <= r; i++) {
      mat[t][i] = num++
    }
    t++
    // top -> bottom
    for (let i = t; i <= b; i++) {
      mat[i][r] = num++
    }
    r--
    // right -> left
    for (let i = r; i >= l; i--) {
      mat[b][i] = num++
    }
    b--
    // bottom -> top
    for (let i = b; i >= t; i--) {
      mat[i][l] = num++
    }
    l++
  }
  return mat
};
console.log(generateMatrix(3));

/**
 * 代码随想录
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix2 = function (n) {
  let startX = startY = 0; // 起始位置
  let loop = Math.floor(n / 2); // 旋转圈数
  let mid = Math.floor(n / 2); // 中间位置
  let offset = 1; // 控制每一层填充元素个数
  let count = 1; // 更新填充数字
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX, col = startY;
    // 上行从左到右（左闭右开）
    // offset决定了边界值
    // offset: 0  startY（0） + n - offset（1）   n - 1
    // offset: 1  startY（1） + n - offset（3）   n - 2
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }
    // 右列从上到下（左闭右开）
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }
    // 下行从右到左（左闭右开）
    for (; col > startX; col--) {
      res[row][col] = count++;
    }
    // 左列从下到上（左闭右开）
    for (; row > startY; row--) {
      res[row][col] = count++;
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset += 2;
  }

  // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
}
console.log(generateMatrix(4));