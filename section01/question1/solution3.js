const containsDuplicate = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
