/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0
  let r = s.length - 1

  // 双指针，交换位置
  while (l < r) {
    let tmp = s[l]
    s[l] = s[r]
    s[r] = tmp

    l++
    r--
  }
};
console.log(reverseString(["h", "e", "l", "l", "o"]));