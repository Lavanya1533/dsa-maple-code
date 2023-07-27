const canPermutePalindrome = (s) => {
  let oddCount = 0;
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    let letterCount = 0;

    if (seen.has(s[i])) continue;

    for (let k = 0; k < s.length; k++) {
      if (s[i] === s[k]) {
        letterCount++;
      }
    }

    // if (letterCount % 2 === 1) {
    //   oddCount++;
    // }

    oddCount += letterCount % 2;

    seen.add(s[i]);
  }

  return oddCount <= 1;
};

const canPermutePalindrome2 = (s) => {
  let oddCount = 0;

  for (let i = 97; i <= 122; i++) {
    let letterCount = 0;

    for (let k = 0; k < s.length; k++) {
      if (s.charCodeAt(k) === i) {
        letterCount++;
      }
    }
    oddCount += letterCount % 2;
  }

  return oddCount <= 1;
};

// Time Complexity: O(127n) => O(n)
// Space Complexity: O(1)
// "Brute Force"
