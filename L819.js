/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // 先转化成小写字母，然后进行获取小写字母，再对禁用列表进行过滤
    // match方法会以数据形式收录结果
    let arr = paragraph.toLowerCase().match(/[a-z]+/g).filter(t => !banned.includes(t));
    let obj = {};
    let res = '';
    let max = 0;
    // 循环结果数组
    for (const a of arr) {
        // 更新记录个数
        obj[a] = (obj[a] || 0) + 1;
        // 获取最大值
        if (obj[a] > max) {
            // 更新数值
            max = obj[a];
            res = a;
        }
    }
    return res;
};