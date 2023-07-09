const rotate = (nums, k) => {
  k %= nums.length;
  const length = nums.length;

  for (let i = 0; i < length - k; i++) {
    nums.push(nums[i]);
  }

  for (let i = 0; i < length; i++) {
    nums[i] = nums[length - k + i];
  }

  for (let i = 0; i < length - k; i++) {
    nums.pop();
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n - k)
