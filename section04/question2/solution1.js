const isValid = (s) => {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }
  return s.length === 0;
};

const isValid2 = (s) => {
  const regex = /\(\)|\[\]|{}/g;
  while (regex.test(s)) {
    s = s.replace(regex, "");
  }
  return s === "";
};

// Time Complexity: O(n^2)
// Space Complexity: O(1) || O(n)
// "Brute Force"
