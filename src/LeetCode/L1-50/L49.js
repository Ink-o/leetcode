/**
 * 思路：使用一个26位数组，来记录个str上出现的次数。然后使用这个数组作为key（内部会执行toString方法）
 * 遇到相同key的项就加入同一个数组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {}
  for (const list of strs) {
    const arr = Array.from({ length: 26 }).fill(0)
    for (let i = 0; i < list.length; i++) {
      arr[list.charCodeAt(i) - 'a'.charCodeAt()] += 1
    }
    obj[arr] ? obj[arr].push(list) : (obj[arr] = [list])
  }
  return Object.values(obj)
}

/**
 * 更优：
 * 使用质数，性质：任何两个不同的质数的乘积都是唯一的
 * 例如 aba 和 aab，他们得出来的乘积就是一样的了
 */
var groupAnagrams = function (strs) {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const map = new Map()
  for (const curStr of strs) {
    let sum = 1
    for (let i = 0; i < curStr.length; i++) {
      sum *= prime[curStr[i].charCodeAt() - 97]
    }
    if (map.has(sum)) {
      map.get(sum).push(curStr)
    }
    else {
      map.set(sum, [curStr])
    }
  }
  return [...map.values()]
}
