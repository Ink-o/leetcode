/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let hash = {};
    let right = 0;
    let left = 0;
    let result = [];
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        right = Math.max(right, hash[s[i]]);
        if (i == right) {
            result.push(right - left + 1);
            left = i + 1;
        }
    }
    return result;
};