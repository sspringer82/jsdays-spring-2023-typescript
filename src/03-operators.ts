// rest parameters
function summarize(a: number, b:number, ...others: number[]): number {
  return a + b + others.reduce((prev, curr) => prev + curr, 0);
}

console.log(summarize(1,2,3,4,5,6));
console.log(summarize(1,2,3));
console.log(summarize(1,2));

// spread operator
const args: [number, number,number,number,number,number] = [1,2,3,4,5,6];
const result2 = summarize(...args);
console.log(result2);

// copy by spread
const klausi = {name: 'klaus'};
const original = [1,2,3, klausi];
console.log(original);
const copy = [...original];
const copy2 = structuredClone(original);
(copy[3] as {name: string}).name = 'Lisa';
// (copy2[3] as {name: string}).name = 'Paula';
console.log('original', original);
console.log('copy2', copy2);

// ** operator
const pow = Math.pow(4,2);
const pow2 = 4**2;

// optional chaining
const o: any = {
  name: 'Bob',
  cat: {
    name: 'citty'
  }
};

console.log(o.cat.name); // citty

console.log (o && o.dog && o.dog.name)
console.log(o.dog?.name);

type optionalString = string | undefined;

// nullish coalescing
console.log(undefined || 'foo'); // foo
console.log(null || 'foo'); // foo
console.log(false || 'foo'); // foo
console.log(null ?? 'foo'); // foo
console.log(undefined ?? 'foo'); // foo
console.log(false ?? 'foo'); // false

// destructuring
const o1 = {
  firstName: 'Klaus',
  age: 42
};

// const firstName = o1.firstName;
// const age = o1.age;

const {firstName, age: yearsOfAge} = o1;

const a1 = [1,2,3];
const [, , three] = a1;

type ThingWithName = {name?: string, age: number};

function doIt({name, age}: ThingWithName): string {
  return name + '(' + age + ')';
}

// non-null-assertion 

function doItNow(foo: null | ThingWithName) {
  if (foo !== null) {
    console.log(foo.name);
  }
}