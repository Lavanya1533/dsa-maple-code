const canPermutePalindrome = (s) => {
  const counts = new Map();

  for (let i = 0; i < s.length; i++) {
    if (counts.has(s[i])) {
      counts.set(s[i], counts.get(s[i]) + 1);
    } else {
      counts.set(s[i], 1);
    }
  }

  let oddCount = 0;
  for (let [key, value] of counts) {
    if (value % 2 === 1) oddCount++;
  }

  return oddCount <= 1;
};

const canPermutePalindrome2 = (s) => {
  let oddCount = 0;
  const counts = new Map();

  for (let i = 0; i < s.length; i++) {
    counts.set(s[i], (counts.get(s[i]) ?? 0) + 1);
    if (counts.get(s[i]) % 2) oddCount++;
    else oddCount--;
  }

  return oddCount <= 1;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
