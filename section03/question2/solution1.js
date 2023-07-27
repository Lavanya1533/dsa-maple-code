const isOneEditDistance = (s, t) => {
  if (s === t) return false;

  const sLength = s.length;
  const tLength = t.length;
  const lengthDiff = Math.abs(sLength - tLength);

  if (lengthDiff > 1) return false;

  if (lengthDiff === 0) {
    let diffCount = 0;
    for (let i = 0; i < sLength; i++) {
      if (s[i] !== t[i]) {
        if (diffCount > 0) return false;
        diffCount++;
      }
    }
    return true;
  }

  if (sLength > tLength) return isOneEditDistance(t, s);

  let sx = 0,
    tx = 0;
  let seenDiff = false;

  while (tx < tLength) {
    if (s[sx] !== t[tx]) {
      if (seenDiff) return false;
      seenDiff = true;
      tx++;
    } else {
      sx++;
      tx++;
    }
  }
  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
