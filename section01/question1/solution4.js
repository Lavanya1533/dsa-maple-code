const containsDuplicate = (nums) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
