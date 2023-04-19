/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let x = matrix[0].length
  let y = matrix.length

  let l = 0, r = x - 1, t = 0, b = y - 1
  console.log(l, r, t, b);
  const sum = x * y
  let count = 1
  let arr = []

  while (count <= sum) {
    for (let i = l; i <= r && count <= sum; i++) {
      arr.push(matrix[t][i])
      count++
    }
    t++
    for (let i = t; i <= b && count <= sum; i++) {
      arr.push(matrix[i][r])
      count++
    }
    r--
    for (let i = r; i >= l && count <= sum; i--) {
      arr.push(matrix[b][i])
      count++
    }
    b--
    for (let i = b; i >= t && count <= sum; i--) {
      arr.push(matrix[i][l])
      count++
    }
    l++
  }
  return arr
};
console.log(spiralOrder([[]]));