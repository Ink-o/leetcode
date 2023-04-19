/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 动态规划写法
 */
var wordBreak = function(s, wordDict) {
    // dp[j] 表示 s的前j个字符是否被完全匹配上的结果
    let dp = new Array(s.length + 1).fill(false);
    // 初始化dp数组，第0个默认为true
    dp[0] = true;
    
    // 先遍历背包
    for (let i = 0; i <= s.length; i++) {
        // 再遍历物品
        for (let j = 0; j < wordDict.length; j++) {
            // 判断物品是否可以放入
            if (i >= wordDict[j].length) {
                // 字符串截取对比，当字符串匹配成功后还需要上一段的匹配为true才行
                if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true;
                }
            }
        }
    }
    return dp[s.length];
};
console.log(wordBreak("leetcode", ["leet","code"]));


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 使用回溯写法，记忆化搜索，对已经计算过的结果进行记录
 */
 var wordBreak2 = function(s, wordDict) {
    //  去重比对结果
    let set = new Set(wordDict);
    // 记忆化比对结果（值为-1的时候，说明从此索引开始的值一直都是无效的）
    let memory = [];
    
    return backTracking(1, 0);
    
    function backTracking(s, startIndex) {
        // 指针走到了尾部直接返回true
        if (startIndex === s.length) {
            return true;
        }
        // 如果发现有重复计算并且结果为-1，则直接返回false
        if (memory[startIndex] === -1) {
            return false;
        }
        for (let i = startIndex; i < s.length; i++) {
            let sub = s.slice(startIndex, i + 1);

            // 看是否有匹配子串，没有的话则直接进行下一个循环
            if (!set.has(sub)) {
                continue;
            }
            // 继续进行下一层匹配
            let res = backTracking(s, i + 1);
            // 如果后面的结果都精准匹配了，则直接返回true
            if (res) return true;
        }
        // 当一层循环走完了之后，发现还是没有，就直接在记忆数组里标记结果为-1
        memory[startIndex] = -1;
    }
};
console.log(wordBreak2("catsandog", ["cats", "dog", "sand", "and", "cat"]));