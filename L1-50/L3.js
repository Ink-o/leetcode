/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (!s.length) {
//     return 0;
//   }
//   let left = 0; // 慢指针
//   let max = 0;
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       // 更新慢指针，为什么要取最大值？因为left指针需要一直往前，不可以往后，所以需要取最大值
//       left = Math.max(left, map.get(s[i]) + 1);
//     }
//     map.set(s[i], i); // 更新map集合
//     max = Math.max(max, i - left + 1);
//   }
//   return max;
// };

// labuladong 小册写法
/**
 * 滑动窗口写法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  const window = new Map()
  let left = 0
  let right = 0
  let len = 0

  // right 指针一直往前走
  while (right < s.length) {
    const cur = s[right]
    window.set(cur, (window.get(cur) || 0) + 1)
    // 这个 right 自增要在获取最新长度前自增，要不然后面获取长度会缺1
    right++

    // 遇到重复字段，map 进行删减
    while (window.get(cur) > 1) {
      // 左指针开始移动，对原本的 map 记录进行删减
      const l = s[left]
      left++
      window.set(l, window.get(l) - 1)
    }
    // 整理完后获取最新的 len
    len = Math.max(len, right - left)
  }
  return len
};