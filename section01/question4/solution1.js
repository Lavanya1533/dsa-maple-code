const intersect = (nums1, nums2) => {
  const counts1 = getCounts(nums1);
  const counts2 = getCounts(nums2);
  const result = [];

  for (let [num, count1] of counts1) {
    const count2 = counts2.get(num) || 0;
    const minCount = Math.min(count1, count2);
    for (let i = 0; i < minCount; i++) {
      result.push(num);
    }
  }

  return result;
};

const getCounts = (nums) => {
  const counts = new Map();
  for (let num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }
  return counts;
};

// nums1.length = m, nums2.length = n
// Time Complexity: O(m + n) => O(n) || O(m)
// Space Complexity: O(m + n) => O(n) || O(m)
