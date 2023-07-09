const maxProfit = (prices) => {
  let minPrice = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;

    if (profit > max) {
      max = profit;
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return max;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
