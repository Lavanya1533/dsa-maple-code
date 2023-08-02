// What if there is only type of parantheses? E.g. (((())))()()(())

const isValid = (s) => {
  if (s.length % 2) return false;
  let open = 0;

  for (let p of s) {
    open += p === "(" ? 1 : -1;
    if (open < 0) return false;
  }

  return open === 0;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

["()", "()()()", "()()()", "((()))", "())", "((()"].forEach((s) =>
  console.log(s, isValid(s))
);
