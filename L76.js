/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 需要的t序列的集合
    let need = {};
    let window = {};
    // 记录所需字符
    for (const cur of t) {
        need[window] = (need[window] || 0) + 1;
    }
    // 左右指针
    let left = right = 0;
    let valid = 0;
    // 最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while (right < s.length) {
        // 即将移入窗口的字符
        let c = s[right];
        // 右移窗口
        right++;
        // 判断是否是子串中需要的
        if (need[c]) {
            // 当前字符在需要的字符中，则需要更新当前窗口统计
            window[c] = (window[c] || 0) + 1;
            if (window[c] === need[c]) {
                valid++;
            }
        }
    }
    // 当验证数量与所需要的字符个数一致时，就应该收缩窗口了
    while (valid === Object.keys(need).length) {
        // 更新最小覆盖子串
        if (right - left < len) {
            start = left;
            len = right - left;
        }
        // 即将移出窗口的字符
        let d = s[left];
        // 左移窗口
        left++;
        if (need[d]) {
            if (window[d] === need[d]) {
                valid--;
            }
            window[d]--;
        }
    }
}