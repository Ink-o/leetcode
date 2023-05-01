/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let strArr = s.split('');
    // 先反转 0，n - 1 范围的数组
    reverse(strArr, 0, n - 1);
    // 再反转 n，len - 1 范围的数组
    reverse(strArr, n, strArr.length - 1);
    // 最后再统一反转
    reverse(strArr, 0, strArr.length - 1);
    return strArr.join('');
    function reverse(strArr, l, r) {
        while (l < r) {
            let tmp = strArr[l];
            strArr[l] = strArr[r];
            strArr[r] = tmp;
            l++;
            r--;
        }
    }
};
console.log(reverseLeftWords('abcdefg', 2));