/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 贪心思路
 */
var maxProfit = function(prices, fee) {
    let result = 0;

    // 这里的初始化购买是没有扣除手续费的
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // 当前价格小于最小价格，进行买入
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }

        // 价格+手续费大于价格，此时不买不卖
        if (prices[i] > minPrice && prices[i] < minPrice + fee) {
            continue;
        }
        
        // 此时进行卖出
        if (prices[i] > minPrice + fee) {

            // 计算收益
            result += prices[i] - minPrice - fee;
            
            // 重新买入，直接扣除手续费
            minPrice = prices[i] - fee;
        }
    }
    return result;
};
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));