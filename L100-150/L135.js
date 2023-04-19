/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candys = new Array(ratings.length).fill(1);
    let result = 0;
    // 从左往右开始遍历，先处理右节点大于左节点的情况，大于就+1
    for (let i = 0; i < ratings.length - 1; i++) {
        if (ratings[i + 1] > ratings[i]) {
            candys[i + 1] = candys[i] + 1;
        }
    }
    // 从右往左开始循环，处理左节点大于右节点的情况，取最大值
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candys[i] = Math.max(candys[i], candys[i + 1] + 1);
        }
        // 记录结果值
        result += candys[i + 1];
    }
    // 最后再加上第一个孩子分得的糖果
    result += candys[0];
    return result;
};
console.log(candy([1,2,2]));