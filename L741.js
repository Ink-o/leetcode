/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let result = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
            continue;
        }
        if (prices[i] > minPrice + fee) {
            result += prices[i] - minPrice - fee;
            // 买入和卖出只需要支付一次手续费，赚到的钱-手续费就相当于买入的费用了
            minPrice = prices[i] - fee;
        }
    }
    return result;
};
maxProfit([1,3,7,5,10,3], 3);