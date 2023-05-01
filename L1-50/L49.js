/**
 * 思路：使用一个26位数组，来记录个str上出现的次数。然后使用这个数组作为key（内部会执行toString方法）
 * 遇到相同key的项就加入同一个数组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {}
  for (const list of strs) {
    const arr = new Array(26).fill(0)
    for (let i = 0; i < list.length; i++) {
      arr[list.charCodeAt(i) - 'a'.charCodeAt()] += 1
    }
    obj[arr] ? obj[arr].push(list) : (obj[arr] = [list])
  }
  return Object.values(obj)
}