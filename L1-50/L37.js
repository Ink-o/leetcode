/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  function isValid(row, col, val, board) {
    const len = board.length
    // 行不能重复
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) {
        return false
      }
    }
    // 列不能重复
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) {
        return false
      }
    }

    // 所在区域格子里不能重复
    const startRow = Math.floor(row / 3) * 3 // 每个独立小9宫格的行起点
    const startCol = Math.floor(col / 3) * 3 // 每个独立小9宫格的列起点

    // 这里的 i、j 起点是 startRow、startCol
    // 终点是 startRow + startCol + 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        // 如果小九宫格有重复数字，则表示无效
        if (board[i][j] === val) {
          return false
        }
      }
    }

    // 如果上面都没失败，则代表成功
    return true
  }

  function backTracking() {
    // 行遍历
    for (let i = 0; i < board.length; i++) {
      // 列遍历
      for (let j = 0; j < board[0].length; j++) {
        // 非空占位不进行处理
        if (board[i][j] !== '.')
          continue
        // 格子里只能存放1-9的数字，所以这里数字的范围是 1 - 9
        for (let val = 1; val <= 9; val++) {
          // 这里对即将要填入的数字进行校验，如果合法则进行填充
          if (isValid(i, j, `${val}`, board)) {
            board[i][j] = `${val}`
            // ⭐️如果后续的填充也是通过的，则说明这个数字填充是合理的，直接返回 true
            if (backTracking()) {
              return true
            }
            board[i][j] = '.'
          }
        }
        // ⭐️如果上面的数字填写后都没有 return true，则这个格子就是失败的
        return false
      }
    }
    // ⭐️如果行和列都被填满了数字，则说明这次是有效的
    return true
  }
  backTracking(board)
  return board
}
