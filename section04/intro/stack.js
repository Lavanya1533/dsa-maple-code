class Stack {
  #data;

  constructor() {
    this.#data = [];
    this.size = 0;
  }

  push(item) {
    this.#data.push(item);
    this.size++;
  }

  pop() {
    if (!this.isEmpty()) {
      this.size--;
    }
    return this.#data.pop();
  }

  peek() {
    return this.#data[this.#data.length - 1];
  }

  isEmpty() {
    return this.#data.length === 0;
  }

  clear() {
    this.#data = [];
    this.size = 0;
  }

  // print() {
  //   console.log(this.#data.join(' '));
  // }
}

const s = new Stack();

s.push(3);
s.push(5);
s.pop();

console.log(s.isEmpty());

s.push(7);

console.log(s.peek());

s.push(9);
s.push(11);

console.log(s.size);

s.pop();
s.pop();
s.pop();
console.log(s.pop());

s.pop();
console.log(s.size);
