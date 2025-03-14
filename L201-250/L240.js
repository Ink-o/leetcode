/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let i = matrix.length - 1
  let j = 0
  // 从左下角的元素开始查找
  while (i >= 0 && j < matrix[0].length) {
    // 当前元素比目标值大的话，则消除掉当前行(当前行的最小元素都比目标值要大了)
    if (matrix[i][j] > target) {
      i--
    }
    else if (matrix[i][j] < target) {
      // 当前元素比目标值小的话，则消除掉当前列
      j++
    }
    else {
      return true
    }
  }
  return false
}
