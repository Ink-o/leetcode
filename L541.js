/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const len = s.length;
    let resArr = s.split('');
    // i每次移动2k个位置，l位置为i - 1，r位置为i+k
    for (let i = 0; i < len; i += 2*k) {
        // i: 0 l: 0 r: 3
        // 交换只是++l 和 --r交换
        let l = i - 1, // l为这次范围的头 - 1
            r = i + k > len ? len : i + k; // r为这次范围的尾 + 1
        while (++l < --r) {
            // 解构赋值
            [resArr[l], resArr[r]] = [resArr[r], resArr[l]]
        }
    }
    return resArr.join('');
};
console.log(reverseStr('abcdefg', 2));