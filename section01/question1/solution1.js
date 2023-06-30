const containsDuplicate = (nums) => {
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (nums[left] === nums[right]) {
        return true;
      }
    }
  }

  return false;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// "Brute Force"
