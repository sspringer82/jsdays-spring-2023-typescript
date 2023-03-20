function add(a: number, b: number): number {
  return a + b;
}

function throws(): never {
  throw new Error();
}

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

function addTo(a: number, b?: number): number {
  return b ? a + b : a;
}

addTo(1);
addTo(2, 3);
// addTo();
// addTo(1,2,3);

function addTo10(a: number, b: number = 10): number {
  return a + b;
}

addTo10(1); // 11
addTo10(1, 20); // 21
console.log(addTo10(1, undefined)); // geht ;(
// console.log(addTo10(1, '11')); // geht nicht

// anonymous function

const sub = function (a: number, b: number): number {
  return a - b;
}

const summary = [1, 2, 3].map(function (a) { return a * 2});

// IIFE
// (function () {
// })();

// arrow function 
const mul = (a: number, b: number): number => { return a * b };
console.log(mul(1, 4));

const div: (a: number, b: number) => number = (a, b) => a / b;

type divFn = (a: number, b: number) => number;

const div2: divFn = (a, b) => a / b;