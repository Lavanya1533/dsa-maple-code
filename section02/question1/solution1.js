const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// "Brute Force"
