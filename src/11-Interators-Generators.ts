let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}
for (let i of list) {
  console.log(i); // 4, 5, 6
}


let pets = new Set<string>(["Cat", "Dog", "Hamster"]);
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}

const myIterator = {
  next () {
    return {
      value: this.values[this.current++],
      done: this.current > this.values.length
    }
  },
  values: [2,4,6,8],
  current: 0,
  [Symbol.iterator]() {
    return this;
  },
};

for (let v of myIterator) {
  console.log(v);
}

const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
for (const value of myIterable) {
  console.log(value);
}

const genFunction = function*() {
  while(true) {
    yield Math.random();
  }
}

for (const v of genFunction()) {
  console.log(v);
}

const gen = genFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);