/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let maxprofit = 0;
  while (prices[buy] !== undefined && prices[sell] !== undefined) {
    const profit = prices[sell] - prices[buy];
    if (profit > maxprofit) maxprofit = profit;
    if (prices[sell] < prices[buy]) buy = sell;
    sell++;
  }
  return maxprofit;
};
