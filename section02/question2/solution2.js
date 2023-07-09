const rotate = (nums, k) => {
  const extra = [];
  k %= nums.length;
  const length = nums.length;

  for (let i = 0; i < k; i++) {
    extra[i] = nums[length - k + i];
  }

  for (let i = k; i < length; i++) {
    extra[i] = nums[i - k];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = extra[i];
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Question
// For the last loop, why does this not work? nums = extra;

const rotate2 = (nums, k) => {
  const extra = [];
  k %= nums.length;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    extra[(i + k) % length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = extra[i];
  }
};
