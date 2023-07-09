const maxProfit = (prices) => {
  let max = 0;

  for (let buy = 0; buy < prices.length; buy++) {
    for (let sell = buy + 1; sell < prices.length; sell++) {
      let profit = prices[sell] - prices[buy];
      if (profit > max) {
        max = profit;
      }
    }
  }

  return max;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// "Brute Force"
