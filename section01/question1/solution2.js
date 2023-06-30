const containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b);

  for (let current = 0; current < nums.length - 1; current++) {
    if (nums[current] === nums[current + 1]) {
      return true;
    }
  }

  return false;
};

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) or O(n) depending on sorting the original input
