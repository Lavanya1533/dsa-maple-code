const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const intersection = [];

  for (let num of nums2) {
    if (set1.has(num)) {
      intersection.push(num);
      set1.delete(num);
    }
  }

  return intersection;
};

// nums1.length = m, nums2.length = n
// Time Complexity: O(m + n) => O(n) || O(m)
// Space Complexity: O(m + intersection) => O(m)
