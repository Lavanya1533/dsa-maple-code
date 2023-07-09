const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    map.set(number, i);
  }

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const complement = target - number;
    const complementIndex = map.get(complement);

    if (complementIndex !== undefined && i != complementIndex) {
      return [i, complementIndex];
    }
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
