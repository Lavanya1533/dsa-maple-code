class MinStack {
  #data;
  #min;

  constructor() {
    this.#data = [];
    this.#min = Infinity;
  }

  push(item) {
    this.#min = Math.min(this.#min, item);
    this.#data.push({ item, min: this.#min });
  }

  pop() {
    const { item } = this.#data.pop();
    this.#min = this.getMin() ?? Infinity;
    return item;
  }

  top() {
    const { item } = this.#data[this.#data.length - 1];
    return item;
  }

  getMin() {
    return this.#data[this.#data.length - 1]?.min;
  }
}

// Time Complexity: O(1) for each
// Space Complexity: O(n)
