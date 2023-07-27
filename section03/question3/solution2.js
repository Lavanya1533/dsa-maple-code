const addStrings = (num1, num2) => {
  if (num2.length > num1.length) return addStrings(num2, num1);

  const result = [];
  let carry = 0;

  for (let i = 0; i < num1.length; i++) {
    let digit1 = num1[num1.length - 1 - i];
    let digit2 = num2[num2.length - 1 - i] ?? "0";

    let sum = +digit1 + +digit2 + carry;
    carry = 0;

    if (sum > 9) {
      sum %= 10;
      carry = 1;
    }

    result.push(sum);
  }

  if (carry) result.push(carry);
  return result.reverse().join("");
};

// Time Complexity: O(max(n, m))
// Space Complexity: O(1)
