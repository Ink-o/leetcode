/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candys = new Array(ratings.length).fill(1);
    let result = 0;
    // 从左往右开始遍历
    for (let i = 0; i < ratings.length - 1; i++) {
        if (ratings[i + 1] > ratings[i]) {
            candys[i + 1] = candys[i] + 1;
        }
    }
    // 从右往左开始循环
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candys[i] = Math.max(candys[i], candys[i + 1] + 1);
        }
        result += candys[i + 1];
    }
    result += candys[0];
    return result;
};
console.log(candy([1,2,2]));