/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let strArr = s.split('');
    reverse(strArr, 0, n - 1);
    reverse(strArr, n, strArr.length - 1);
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