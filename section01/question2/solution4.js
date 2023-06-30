const singleNumber = (nums) => {
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }
  return xor;
  // return nums.reduce((res, num) => res ^ num,0)
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// See: XOR on https://www.w3schools.com/js/js_bitwise.asp
// 5 ^ 7 ^ 5 = 7
