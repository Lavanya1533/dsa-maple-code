const singleNumber = (nums) => {
  const counts = new Map();

  for (const num of nums) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  }

  for (const [key, value] of counts) {
    if (value === 1) {
      return key;
    }
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
