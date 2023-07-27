const isOneEditDistance = (s, t) => {
  if (s === t) return false;

  const sLength = s.length;
  const tLength = t.length;

  if (Math.abs(sLength - tLength) > 1) return false;

  let sx = 0,
    tx = 0,
    diff = 0;

  while (sx < sLength && tx < tLength) {
    if (s[sx] === t[tx]) {
      sx++;
      tx++;
      continue;
    }

    if (diff == 0) diff++;
    else return false;

    if (sLength === tLength) {
      sx++;
      tx++;
    } else if (sLength > tLength) {
      sx++;
    } else {
      tx++;
    }
  }

  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
