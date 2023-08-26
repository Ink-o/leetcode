/**
 * 思路：维护行列的数据类型，每添加一个新行都要判断是否存在对角关系
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let path = [];
  let result = [];
  // k为层级，v为占用列（x为k，v为y）
  let rowMap = new Map();
  // 收集占用的列
  let columnSet = new Set();
  progress(0);
  return result;
  function progress(level) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (
        level !== 0 &&
        (
          columnSet.has(i) || // 判断当前列是否被使用过
          isDuijiao(level, i) // ⭐️判断对角是每一个层级都要进行判断，不仅仅是相邻的层
        )
      ) {
        continue;
      }
      // 维护使用过的列和行列坐标
      columnSet.add(i);
      rowMap.set(level, i);
      path.push(generatePath(n, i));
      progress(level + 1);
      // 回溯
      columnSet.delete(i);
      path.pop();
      rowMap.delete(level);
    }
  }
  function isDuijiao(x, y) {
    let result = false;
    // 是否在同一对角线上，公式|x - x1| == |y - y1|，若相同则相等
    // ⭐️注意这里的 val 是列位置，key 是行位置。set 进去的值是 i ，也就是 y
    rowMap.forEach((val, key) => {
      let y1 = val; // 列位置
      let x1 = key; // 行位置
      if (Math.abs(x1 - x) == Math.abs(y - y1)) {
        result = true;
      }
    });
    return result;
  }
  function generatePath(len, index) {
    if (index === 0) {
      return 'Q' + '.'.repeat(len - 1);
    }
    if (index === len - 1) {
      return '.'.repeat(len - 1) + 'Q';
    }
    return '.'.repeat(index) + 'Q' + ('.'.repeat(len - index - 1));
  }
};
console.log(solveNQueens(4));

// console.log(solveNQueens(5));


// 代码随想录版本
var solveNQueens2 = function (n) {
  let result = []
  function transformChessBorad(chessBorad) {
    let chessBoradBack = [];
    chessBorad.forEach(row => {
      // 数组转换成字符串，然后进行拼接
      let rowStr = '';
      row.forEach(value => {
        rowStr += value;
      })
      chessBoradBack.push(rowStr);
    })
    return chessBoradBack
  }
  function isValid(row, col, chessBorad, n) {
    // 检测同一列上是否存在2个皇后
    for (let i = 0; i < row; i++) {
      if (chessBorad[i][col] === 'Q') {
        return false
      }
    }
    // 检查左对角线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBorad[i][j] === 'Q') {
        return false
      }
    }
    // 检查右对角线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBorad[i][j] === 'Q') {
        return false
      }
    }
    return true
  }
  function backtracking(row, chessBorad) {
    if (row === n) {
      console.log('chessBorad', chessBorad);
      result.push(transformChessBorad(chessBorad));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBorad, n)) {
        chessBorad[row][col] = 'Q';
        backtracking(row + 1, chessBorad);
        chessBorad[row][col] = '.';
      }
    }
  }
  let chessBorad = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  backtracking(0, chessBorad);
  return result;
}
// solveNQueens2(4)


// 位运算版（只返回数量）
var solveNQueens3 = function (n) {
  let res = 0
  const dfs = (n, row, cols, pie, na) => {
    if (row === n) {
      res++
      return
    }
    // 得到可以放置所有皇后的空位
    // cols ｜ pie ｜ na ： 所有可以被皇后攻击的格子
    // ~(cols | pie | na)：表示将没有被占的格子从 0 变为 1，主要为了后续遍历
    //  x & ((1 << n) - 1)：将 x 的最高位至第 n 位(含)清零，某些情况导致pie,na边界溢出
    const combine = ~(cols | pie | na);
    // console.log(111, combine.toString(2));
    const pos = (1 << n) - 1
    // 得到当前所有的空位。这里初始化的时候全部都为1，bits中的1是表示可以存放皇后
    let bits = (~(cols | pie | na)) & ((1 << n) - 1)

    while (bits) { // 当bits不为0的时候，继续再往下走
      let p = bits & -bits // 取到最低位的1，获取当前皇后的存放位置

      // col | p 代表在该列中已经含有皇后的列（这里的1是代表已经存放皇后）
      // (pie | p) << 1 位是代表左下角和右上角不能存放的列（这里的1是代表不能存放皇后）
      // (na | p) >> 1 位是代表左上角和右下角的不能存放的列（这里的1是代表不能存放皇后）
      const newCols = cols | p
      const newPie = (pie | p) << 1
      const newNa = (na | p) >> 1
      dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1)
      // 放置皇后成功，将最低位1置0
      bits = bits & (bits - 1) //  放上皇后，把最低位变成0？

      // 由于 cols、pie、na是在函数内部，所以不需要进行重置
    }
  }
  // 这里的 col、pie、nai初始值都为0，代表没有不可以存放皇后的位置
  dfs(n, 0, 0, 0, 0)
  return res
}
solveNQueens3(4)