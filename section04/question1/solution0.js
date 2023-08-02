class MinStack {
  #data;

  constructor() {
    this.#data = [];
  }

  push(item) {
    this.#data.push(item);
  }

  pop() {
    return this.#data.pop();
  }

  top() {
    return this.#data[this.#data.length - 1];
  }

  getMin() {
    return Math.min(...this.#data);
  }
}

// Time Complexity: O(n) for getMin(), O(1) for others
// Space Complexity: O(n)
