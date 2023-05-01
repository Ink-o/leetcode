/**
 * 思路：使用一个 map 来计算字符串上的字符次数
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length !== magazine.length) return false
  const magazineMap = new Map()
  // 记录 magazine 上的字符出现次数
  for (let i = 0; i < magazine.length; i++) {
    magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0 ) + 1)
  }

  // 对 ransomNote 上的字符次数进行对消，最后判断次数是否小于0
  for (let i = 0; i < ransomNote.length; i++) {
    const cur = ransomNote[i]
    magazineMap.set(cur, (magazineMap.get(cur) || 0) - 1)
    if (magazineMap.get(cur) < 0) {
      return false
    }
  }
  return true
};
console.log(canConstruct("aa", "aab"));