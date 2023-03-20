"use strict";
const myName = 'Basti';
console.log('Hallo ' + myName);
class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }
    greet(what) {
        return `${what} ${this.firstName}`;
    }
}
const klaus = new Person('Klaus');
//# sourceMappingURL=index.js.map