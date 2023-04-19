/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let hash = {};
    let right = 0;
    let left = 0;
    let result = [];
    
    // 更新每一个字符最后出现的索引位置
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }

    // 再次进行循环，
    for (let i = 0; i < s.length; i++) {
        // 更新字符串的最右边界
        right = Math.max(right, hash[s[i]]);

        // 如果当前索引与右边界重合，那么，这就是一个切割区域
        if (i == right) {
            result.push(right - left + 1);
            // 左边界移动到i + 1
            left = i + 1;
        }
    }
    return result;
};