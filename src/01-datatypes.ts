// Primitive Types (by-value)

// string 
const s1: string = "Hallo 'Welt'";
const s2 = 'Hallo "Welt"';
const myFirstName = 'Basti';
// const s3 = `Hallo ${myName}`;
// const s4 = new String('xxx');
const foo: string = ''+ 13; (13).toString()

// Number
const n: number = 42;
const n2 = 3.14;
const n3 = 4e12;
const n4 = 0xaf3;
const n5 = 0o347;
const n6 = 0b011;

// Boolean 
const b1: boolean = true;
const b2 = false;
const b3 = !!1;

// Symbol
const sym = Symbol('MySymbol');
const symObj = {
  [sym]: 'value'
};
console.log('symbol value: ' + symObj[sym]);
console.log(symObj);

// bigint
const bi1 = BigInt(42);
const bi2 = 42n;

console.log('Int', Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
const bi = BigInt(Number.MAX_SAFE_INTEGER);
console.log('Bi ', bi  + 1n === bi + 2n);
console.log(Number.MAX_SAFE_INTEGER);

// const charstr = String.fromCharCode(72);

const nu: null = null; // kein Wert in einer Variablen - Für EntwicklerInnen
const un: undefined = undefined; // kein Wert für die Engine (nur für Vergleiche etc.)

// let myUndefined = undefined;

// Composite Types (by-reference)

const obj = {
  name: 'Klaus'
};

obj.name = 'Lisa';
console.log(obj.name);
// const obj2 = new Object(); // das macht man nicht

const arr = [1, 2, 3];
console.log(arr[1]); // 2


const arr2 = new Array<number>(10);
console.log('array element', arr2[4]);

const result = arr2.fill(0).map((e, index) => index);
console.log(result);

let sum: null | number = null;
sum = 4 + 5;
console.log(sum);

// Dangerzone
let enemy: any = 'blafasel';
enemy = 42;
// anycast
const data = {sum: 42};

// eslint-disable-next-line
const myData = data as any as number;
// Dangerzone

function unknownFn(input: unknown): void {

  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else {
    throw new Error('invalid type')
  }
  console.log(typeof input);

  // input.foo();
  // input[0];
  // input();
  // new input();
  // const o: object = input;
  // const s: string = input;

}

unknownFn('string');