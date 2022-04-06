/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [], path = [], len = s.length;
    backtracking(0);
    return res;
    function backtracking(startIndex) {
        if (startIndex >= len) {
            res.push([...path]);
            return;
        }
        // startIndex为当前纵向遍历的层级，i为横向遍历的层级，startIndex会一直从0开始，但是i只能有一次为0
        // 规律，第一次循环，i和startIndex相等，第二次循环i和startIndex相差1，第n次循环相差n
        for (let i = startIndex; i < len; i++) {
            console.log(startIndex, i);
            // 判断startIndex到达i的位置截取的字符串是否为回文
            if (!isPalindrom(s, startIndex, i)) continue;
            path.push(s.substring(startIndex, i + 1));
            backtracking(i + 1);
            path.pop();
        }
    }
};
function isPalindrom(s, l, r) {
    for (let i = l, j = r; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}
console.log(partition('aab'));