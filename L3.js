/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (!s.length) {
        return 0;
    }
    let left = 0; // 慢指针
    let max = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            // 更新慢指针，为什么要取最大值？因为left指针需要一直往前，不可以往后，所以需要取最大值
            left = Math.max(left, map.get(s[i]) + 1);
        }
        map.set(s[i], i); // 更新map集合
        max = Math.max(max, i - left + 1);
    }
    return max;
};