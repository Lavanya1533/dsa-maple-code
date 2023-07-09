const rotate = (nums, k) => {
  k %= nums.length;
  for (let i = 0; i < k; i++) {
    rotateOneStep(nums);
  }
};

const rotateOneStep = (nums) => {
  let prev = nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    nums[i] = prev;
    prev = current;
  }
};

// Time Complexity: O(nk)
// Space Complexity: O(1)
// "Brute Force"
