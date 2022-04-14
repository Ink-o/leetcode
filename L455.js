/**
 * @param {number[]} g 孩子的胃口值
 * @param {number[]} s 饼干值
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 从小到大排序
    s = s.sort((a,b) => a - b);
    g = g.sort((a,b) => a - b);
    let gIndex = 0;
    // 外层遍历饼干值（一定是饼干先遍历，饼干不满足胃口值可以跳过饼干，但是孩子不可以跳过）
    for (let i = 0; i < s.length; i++) {
        // 如果遇到饼干值小于胃口的情况，则继续进行循环
        if (gIndex < g.length && s[i] >= g[gIndex]) {
            gIndex++;
        }
    }
    return gIndex;
};
console.log(findContentChildren([1,3,5,7], [1,0]));