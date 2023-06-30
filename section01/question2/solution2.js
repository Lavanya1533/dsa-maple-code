const singleNumber = (nums) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(seen)[0];
};

// Time Complexity: O(n)
// Space Complexity: O(n) - What is the maximum size the set will reach?
