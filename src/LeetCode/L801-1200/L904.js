/**
 * 时间复杂度为On+3，这个写法会比官解要好
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  const map = new Map()
  let maxNum = 1
  let left = 0
  fruits.forEach((item, i) => {
    // 这里只记录最后出现的位置
    map.set(item, i)
    // 当map集合的容量大于2时，左指针进行滑动
    if (map.size > 2) {
      let minIndex = fruits.length - 1
      // 找出当前map集合中最小的索引值
      map.forEach((val) => {
        minIndex = Math.min(minIndex, val)
      })
      // 进行删除
      map.delete(fruits[minIndex])
      // 更新左指针索引位置
      left = minIndex + 1
    }
    maxNum = Math.max(maxNum, i - left + 1)
  })
  return maxNum
}
