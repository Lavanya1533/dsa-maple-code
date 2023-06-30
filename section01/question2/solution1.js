const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let count = 0;
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] === currentNumber) {
        count++;
      }
    }
    if (count === 1) {
      return currentNumber;
    }
  }
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// "Brute Force"
