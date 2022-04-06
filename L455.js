/**
 * @param {number[]} g 孩子的胃口值
 * @param {number[]} s 饼干值
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result = 0;
    // let eatMap = new Map();
    s = s.sort((a,b) => a - b);
    g = g.sort((a,b) => a - b);
    for (let i = 0; i < s.length; i++) {
        const value = s[i];
        if (g.length === 0) return result;
        if (value >= g[0]) {
            result++;
            g.shift();
        }
    }
    return result;
};
console.log(findContentChildren([1,3,5,7], [1,0]));