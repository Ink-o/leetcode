/**
 * @param {number[]} prices
 * @return {number}
 */
// 传统做法，低买高卖
// var maxProfit = function(prices) {
//     let profit = 0;
//     let curBuy = 0;
//     let isReadyBuy = true;
//     for (let i = 0, j = i + 1; i < prices.length; i++,j++) {
//         if (
//             j !== prices.length && (
//                 (isReadyBuy && prices[i] >= prices[j]) || 
//                 (!isReadyBuy && prices[i] <= prices[j])
//             )
//         ) {
//             continue;
//         }
//         if (isReadyBuy) {
//             curBuy = prices[i];
//             isReadyBuy = !isReadyBuy;
//             continue;
//         }
//         if (!isReadyBuy) {
//             profit += (prices[i] - curBuy);
//             isReadyBuy = !isReadyBuy;
//         }
//     }
//     return profit;
// };

// 贪心卖法
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        profit = profit + Math.max(prices[i] - prices[i - 1], 0);
    }
    return profit;
}
console.log(maxProfit([7,1,5,3,6,4]));