class MinStack {
  #data;
  #minsWithIndex;

  constructor() {
    this.#data = [];
    this.#minsWithIndex = [];
  }

  push(item) {
    this.#data.push(item);

    const minSoFar = this.#minsWithIndex.at(-1)?.min ?? Infinity;
    if (item < minSoFar) {
      this.#minsWithIndex.push({ min: item, index: this.#data.length - 1 });
    }
  }

  pop() {
    if (this.#data.length - 1 === this.#minsWithIndex.at(-1)?.index) {
      this.#minsWithIndex.pop();
    }
    return this.#data.pop();
  }

  top() {
    return this.#data.at(-1);
  }

  getMin() {
    return this.#minsWithIndex.at(-1)?.min;
  }
}

// Time Complexity: O(1) for each
// Space Complexity: O(n)
