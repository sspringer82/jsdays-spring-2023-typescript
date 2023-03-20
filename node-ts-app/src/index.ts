const myName: string = 'Basti';

console.log('Hallo ' + myName);

class Person {
  constructor(private readonly firstName: string) {}

  greet(what: string): string {
    return `${what} ${this.firstName}`;
  }
}

const klaus = new Person('Klaus');