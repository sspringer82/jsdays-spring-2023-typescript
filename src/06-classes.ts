namespace People {
  class Person {
      private age_: number = 0;
      static count: number = 0;

      static {
        this.count = 1 + 2 + 3;
      }

      constructor(public firstName: string, public lastName: string) {
        console.log('ctor');
      }

      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
      set age(value: number) {
        this.age_ = value;
      }

      greet(what: string): void {
        console.log(`${what} ${this.fullName}`)
      }

      static createPerson(fn: string, ln: string): Person {
        this.count++;
        return new Person(fn, ln);
      }
  }

  interface A {}
  interface B {}

  class User extends Person implements A, B {
    private un = '';
    constructor(firstname: string, lastname: string, userName: string) {
      super(firstname, lastname);
      this.un = userName  + '__'
    }

    greet(what: string) {
      super.greet(what);
      console.log('child');
    }
  }
  
  const klaus = new Person('Klaus', 'Müller');
  console.log(klaus);
  klaus.greet('Hello');
  klaus.age = 15;
  console.log(klaus);
  // klaus.age = 42;

  const lisa = Person.createPerson('Lisa', 'Meier');
  console.log(lisa);
  console.log(Person.count);
}