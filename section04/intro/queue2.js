// Also see: Circular Queue

class Queue {
  #data;
  #headIndex;
  #tailIndex;

  constructor() {
    this.#data = {};
    this.#headIndex = 0;
    this.#tailIndex = 0;
  }

  enqueue(item) {
    this.#data[this.#tailIndex] = item;
    this.#tailIndex++;
  }

  dequeue() {
    if (this.#headIndex === this.#tailIndex) return undefined;

    const item = this.#data[this.#headIndex];
    delete this.#data[this.#headIndex];
    this.#headIndex++;
    return item;
  }

  peek() {
    return this.#data[this.#headIndex];
  }

  // print() {
  //   console.log(this.#data.join(' '));
  // }
}

const q = new Queue();

q.enqueue(3);
q.enqueue(5);
console.log(q.peek());

q.dequeue();
console.log(q.peek());

q.dequeue();
console.log(q.peek());
