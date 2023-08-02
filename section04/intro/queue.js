// Q: Is it a good idea to use arrays as queues? Why would it be inefficient?

class Queue {
  #data;

  constructor() {
    this.#data = [];
  }

  enqueue(item) {
    this.#data.push(item);
  }

  dequeue() {
    if (this.#data.length) {
      return this.#data.shift();
    }
  }

  peek() {
    return this.#data[0];
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
